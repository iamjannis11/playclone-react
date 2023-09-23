import "./Promotion.css";

import { TiTickOutline } from "react-icons/ti";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";

type getType = {
  vid: string;
  subtitle: string;
  title: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
};

const Promotion = ({
  vid,
  subtitle,
  title,
  title1,
  title2,
  title3,
  title4,
}: getType) => {
  const navigate = useNavigate();

  return (
    <section className="hero-promotion section--padding flex--center">
      <div
        className="hero-promotion-video"
        data-aos="flip-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <video src={vid} controls loop muted autoPlay />
      </div>
      <div className="hero-promotion-text">
        <h5>{subtitle}</h5>
        <h3>{title}</h3>
        <div className="promotion-list">
          <div className="promotion-list-text">
            <TiTickOutline className="icon" fill="var(--main-color)" />
            <p>{title1}</p>
          </div>
          <div className="promotion-list-text">
            <TiTickOutline className="icon" fill="var(--main-color)" />
            <p>{title2}</p>
          </div>
          <div className="promotion-list-text">
            <TiTickOutline className="icon" fill="var(--main-color)" />
            <p>{title3}</p>
          </div>
          <div className="promotion-list-text">
            <TiTickOutline className="icon" fill="var(--main-color)" />
            <p>{title4}</p>
          </div>
        </div>
        <div className="hero-button ">
          <button
            className="btn btn-hero"
            onClick={() => navigate("/start-campaign")}
          >
            Start Campaign <BiRightArrowAlt className="icon btn-icon" />
          </button>
        </div>
        <div className="count-container">
          <div className="count-box">
            <div className="count-num">
              <CountUp start={40} end={80} duration={4} />
              <span>K+</span>
            </div>
            <div className="count-text">Verified Playlists</div>
          </div>
          <div className="count-box">
            <div className="count-num">
              <CountUp start={30} end={49} duration={4} />
              <span>K+</span>
            </div>
            <div className="count-text">Playlist Add</div>
          </div>
          <div className="count-box">
            <div className="count-num">
              <CountUp start={70} end={99} duration={4} />
              <span>M+</span>
            </div>
            <div className="count-text">Total Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
