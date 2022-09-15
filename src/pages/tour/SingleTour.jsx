import { useParams } from "react-router-dom";
import Rating from "../../components/tours/Rating";
import { toursList } from "../../data";
import BookNow from "./BookNow";
import "./single-tour.css";

const SingleTour = () => {
  const { id } = useParams();

  const tour = toursList.find((t) => t.id === +id); // parseInt(id) == +id

  return (
    <section className="tour">
      <div className="tour-step">
        United Arab Emirates <i className="bi bi-chevron-right"></i>
        Things to do in Dubai <i className="bi bi-chevron-right"></i> Safari
      </div>
      <div className="tour-category">ADVENTURE</div>
      <h1 className="tour-title">Dubai: {tour.title}</h1>
      <div className="tour-info">
        <Rating rating={tour.rating} reviews={tour.reviews} />
        <div className="tour-provider">
          Activity Provider : <span>Youssef Abbas</span>
        </div>
      </div>
      <div className="tour-img-wrapper">
        <img src={tour.image} alt={tour.title} className="tour-img" />
        <BookNow priceFrom={tour.priceFrom} />
      </div>
      <p className="tour-description">
        Discover a different side of Dubai an a fun-filled safari across the
        desert. Try sandboarding, dune bashing and a camel ride, with the option
        to add an electifying quad bike ride or immersive Al Khayma Camp dinner
        experience to your adventure.
      </p>
      <div className="tour-more-information">
        <h2 className="tour-info-title">About this activity</h2>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#27ae60'}} className="bi bi-calendar3"></i>
            Free Cancellation
          </div>
          <p className="tour-info-item-desc">
            Cancel up to 24 hours in advance to recieve a full refund
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#2980b9'}} className="bi bi-calendar-plus-fill"></i>
            Reserve now & pay later
          </div>
          <p className="tour-info-item-desc">
            Keep your travel plan flexible -- book your spot and pay nothing
            today.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#e74c3c'}} className="bi bi-virus"></i>
            Covid -19 precautions
          </div>
          <p className="tour-info-item-desc">
            Special health and safety measures are in place. Check your activity
            voucher once you book for full details.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#8e44ad'}} className="bi bi-clock-history"></i>
            Duration 4 - 7 hours
          </div>
          <p className="tour-info-item-desc">
          Check availability to see staring times.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#2c3e50'}} className="bi bi-person-check"></i>
            Live tour guide
          </div>
          <p className="tour-info-item-desc">
          English
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleTour;
