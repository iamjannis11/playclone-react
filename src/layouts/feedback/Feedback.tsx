import "./Feedback.css";
import Review from "../../component/review/Review";

import { images } from "../../constant";

const Feedback = () => {
  return (
    <div className="feedback-container section--padding">
      <h5>Real artist feedback</h5>
      <h3>Artist Reviews</h3>
      <div className="review-container">
        <Review
          photo={images.feedback1}
          text="Play.Clone plays a massive part in my marketing strategy. It is
          really the bigest way that I get my music out there."
          name="Miley Cyrus"
        />
        <Review
          photo={images.feedback2}
          text="Play.Clone has been a consistent and reliable way for curators to get a hold of my music."
          name="Adele"
        />
        <Review
          photo={images.feedback3}
          text="Thanks to Play.Clone, I was able to get into big playlists that fit my genre and so many people discovered me."
          name="Taylor Swift"
        />
      </div>
    </div>
  );
};

export default Feedback;
