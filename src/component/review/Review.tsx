import "./Review.css";

import { FaQuoteLeft, FaSpotify } from "react-icons/fa";

type getType = {
  photo: string;
  text: string;
  name: string;
};

const Review = ({ photo, text, name }: getType) => {
  return (
    <div className="review-card">
      <div className="review-card-img">
        <img src={photo} alt="artistImg" data-aos="fade-up-right" />
      </div>
      <div className="review-card-text">
        <FaQuoteLeft className="icon" />
        <p>{text}</p>
        <div className="artist-name flex--center">
          <FaSpotify className="icon" fill="var(--black-font)" />
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Review;
