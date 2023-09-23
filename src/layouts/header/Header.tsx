import { useNavigate } from "react-router-dom";

import "./Header.css";
import { BiRightArrowAlt } from "react-icons/bi";

type getType = {
  name: string;
  title: string;
  subtitle: string;
  photo: string;
};

const Header = ({ name, title, subtitle, photo }: getType) => {
  const navigate = useNavigate();
  return (
    <section className="hero-header flex--center section--padding">
      <div
        className="hero-header-text"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1>
          <span className="header-span">{name}</span>
          {title}
        </h1>
        <h5>{subtitle}</h5>
        <div className="hero-button">
          <button
            className="btn btn-hero"
            onClick={() => navigate("/start-campaign")}
          >
            Start Campaign <BiRightArrowAlt className="icon btn-icon" />
          </button>
        </div>
      </div>
      <div
        className="hero-header-img"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <img src={photo} alt="" />
      </div>
    </section>
  );
};

export default Header;
