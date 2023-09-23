import DropDown from "../../component/dropDown/DropDown.tsx";
import "./Questions.css";

import { images } from "../../constant";

const Questions = () => {
  return (
    <div className="question-container section--padding">
      <div className="members-container flex--center">
        <h4>meet the team</h4>
        <h3>We're here to help you grow</h3>
        <h5>Our experienced team of music promotion experts</h5>
        <div className="members-thumbnail">
          <div className="thumbnail">
            <img src={images.person1} alt="" />
          </div>
          <div className="thumbnail">
            <img src={images.person2} alt="" />
          </div>
          <div className="thumbnail">
            <img src={images.person3} alt="" />
          </div>
          <div className="thumbnail">
            <img src={images.person4} alt="" />
          </div>
          <div className="thumbnail">
            <img src={images.person5} alt="" />
          </div>
        </div>
      </div>
      <div className="promo-questions">
        <h3>Frequently asked questions</h3>
        <p>Find your answers to common playlist promo questions.</p>
        <DropDown
          setUp="How long do campaigns run?"
          punchLine="Your playlist promotion campaign will begin on your campaign start date and will run for 2 weeks (14 days)"
        />
        <hr />
        <DropDown
          setUp="Are results guaranteed?"
          punchLine="Since the playlist curators and their listeners ultimately determine your performance, Play.Clone does not offer any guarantees for the results you will receive after your song is sent out."
        />
        <hr />
        <DropDown
          setUp="About Play.Clone?"
          punchLine="Play.Clone has been helping artists for over 5 years. Since 2017, our team of passionate music promotion experts have supported over 20,000 artists, managers, and labels in reaching their goals. We currently offer campaigns on Spotify and TikTok."
        />
      </div>
    </div>
  );
};

export default Questions;
