import "./Campaign.css";
import { useNavigate } from "react-router-dom";

import { images } from "../../constant";

const Campaign = () => {
  const navigate = useNavigate();

  return (
    <div className="campaign-container section--padding">
      <div className="campaign-container-box">
        <div
          className="campaign-container-left"
          data-aos="fade-right"
          data-aos-easing="ease-out"
          data-aos-duration="1500"
        >
          <span className="logo">
            <span className="logo-text">Play.</span>Clone
          </span>
          <h4>Apply for a Music Promotion Campaign</h4>
          <p>To get your music in Spotify playlists and TikTok videos.</p>
          <div className="line-dash"></div>
          <div className="campaign-img">
            <img
              src={images.campaignImg}
              alt="campaignImg"
              className="rotate-scale-up"
            />
          </div>
        </div>

        <div
          className="campaign-container-right flex--center"
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-duration="1800"
        >
          <h3>Create a Campaign</h3>
          <div className="campaign-create flex--center">
            <div className="campaign-box">
              <h4>Not more than $3.99</h4>
              <div className="campaign-list">
                <ul>
                  <li>3 Hours of Video Content Credits</li>
                  <li>Access to featured content</li>
                  <li>Access to trending topics</li>
                </ul>
              </div>
              <div className="campaign-btn">
                <button className="btn" onClick={() => navigate("/get-it-now")}>
                  Get it Now
                </button>
              </div>
            </div>
            <div className="campaign-box">
              <h4>Not more than $11.9</h4>
              <div className="campaign-list">
                <ul>
                  <li>8 Hours of Video Content Credits</li>
                  <li>Access to hot content</li>
                  <li>Access to +20M views</li>
                </ul>
              </div>
              <div className="campaign-btn">
                <button className="btn" onClick={() => navigate("/get-it-now")}>
                  Get it Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="campaign-footer">
        <div className="line-dash"></div>
        <p>
          more info on what we do, visit our{" "}
          <a href="#" onClick={() => navigate("/")}>
            homepage
          </a>
        </p>
      </div>
    </div>
  );
};

export default Campaign;
