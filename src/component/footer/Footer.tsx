import "./Footer.css";

import { data } from "../../constant";

import {
  BiRightArrowAlt,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTwitter,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";

type getType = {
  imgUrl: string;
  title: string;
};

const Preview = ({ imgUrl, title }: getType) => (
  <div className="card">
    <img src={imgUrl} alt="previewImg" />
    <h3>{title}</h3>
  </div>
);

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="section--padding">
      <div className="getStarted-container flex--center">
        <h2>Get started today</h2>
        <h5>Set up your campaign in under 3 minutes.</h5>
        <button
          className="btn btn-footer"
          onClick={() => navigate("/start-campaign")}
        >
          Start Campaign <BiRightArrowAlt className="icon btn-icon" />
        </button>
      </div>

      <div className="line-dash"></div>

      <div className="footer-container">
        <div className="footer-container-left">
          <span className="logo">
            <span className="logo-text">Play.</span>clone
          </span>
          <div className="footer-icons">
            <BiLogoInstagram className="icon footer-icon" />
            <BiLogoYoutube className="icon footer-icon" />
            <BiLogoTwitter className="icon footer-icon" />
          </div>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            itaque eveniet dignissimos nostrum nemo in aliquam amet velit optio
            enim quibusdam, recusandae vitae odit facere? Id voluptates
            voluptate voluptatem nisi.
          </h5>
        </div>
        <div className="footer-container-right">
          <div className="right-box">
            <h5>For Artists</h5>
            <p>Spotify Playlists Promotion</p>
            <p>TikTok Music Promotion</p>
            <p>Blog for Artists</p>
            <p>Artists Help Center</p>
            <p>Spotify Stream Calculator</p>
            <p>Gift Cards</p>
          </div>
          <div className="right-box">
            <h5>For Creators</h5>
            <p>TikTok Creators</p>
            <p>Playlists Creators</p>
            <p>Creators Help Center</p>
            <p>Blog Creators</p>
            <p>Affiliate Program</p>
          </div>
          <div className="right-box">
            <h5>Company</h5>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Logo</p>
          </div>
        </div>
      </div>

      <div className="preview-container">
        {data.previewCard.map((card) => (
          <Preview title={card.title} imgUrl={card.imgUrl} />
        ))}
      </div>

      <div className="copy-line">
        <p>2023 Jannis, All right reserved for Play.Clone</p>
      </div>
    </footer>
  );
};

export default Footer;
