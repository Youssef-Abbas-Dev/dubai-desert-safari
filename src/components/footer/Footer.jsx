import { languages, currencies } from "../../data";
import "./footer.css";
import FooterIcon from "./FooterIcon";
import SelectBox from "./SelectBox";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-item select-box-wrapper">
            <SelectBox items={languages} label="Language" />
            <SelectBox items={currencies} label="Currency" />
        </div>
      <div className="footer-item">
        <h3 className="footer-item-title">Support</h3>
        <ul className="footer-item-list">
          <li className="footer-item-link">Contact</li>
          <li className="footer-item-link">Legal Notice</li>
          <li className="footer-item-link">Privacy Policy</li>
          <li className="footer-item-link">General Terms</li>
          <li className="footer-item-link">Sitemap</li>
        </ul>
      </div>
      <div className="footer-item">
        <h3 className="footer-item-title">Company</h3>
        <ul className="footer-item-list">
          <li className="footer-item-link">About Us</li>
          <li className="footer-item-link">Careers</li>
          <li className="footer-item-link">Blog</li>
          <li className="footer-item-link">Press</li>
          <li className="footer-item-link">Gift Cards</li>
          <li className="footer-item-link">Magazine</li>
          <li className="footer-item-link">Travel Giudes</li>
        </ul>
      </div>
      <div className="footer-item">
        <h3 className="footer-item-title">Work With Us</h3>
        <ul className="footer-item-list">
          <li className="footer-item-link">Become a Supplier</li>
          <li className="footer-item-link">Become an Affiliate Partner</li>
        </ul>
        <FooterIcon />
        <div className="footer-copy-right">
            Copyright &copy; 2022 Dubai Safari
        </div>
      </div>
    </footer>
  );
};

export default Footer;
