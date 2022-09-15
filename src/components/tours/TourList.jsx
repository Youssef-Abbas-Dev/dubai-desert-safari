
import "./tour-list.css";
import TourItem from "./TourItem";

const TourList = ({ toursList }) => {
  return (
    <div className="tour-list">
      {toursList.map((item) => (
         <TourItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TourList;
