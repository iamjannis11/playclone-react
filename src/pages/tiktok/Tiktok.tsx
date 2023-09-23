import { useNavigate } from "react-router-dom";
import "./Tiktok.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { images, tiktokVid, tiktok1, tiktok2, tiktok3 } from "../../constant";

import Navbar from "../../component/navbar/Navbar";
import Header from "../../layouts/header/Header";
import Promotion from "../../layouts/promotion/Promotion";
import Questions from "../../layouts/questions/Questions";
import Footer from "../../component/footer/Footer";

const Tiktok = () => {
  const navigate = useNavigate();
  return (
    <div className="tiktok-container">
      <Navbar />
      <div id="tiktok-promotion">
        <Header
          name="Promote"
          title=" your Music on TikTok"
          subtitle="Get your song in TikTok influencer videos — Submit your music to TikTokers and creators to use your sounds in their videos"
          photo={images.tiktokImg}
        />
      </div>
      <Promotion
        vid={tiktokVid}
        subtitle="TikTok music promotion"
        title="Reach millions of listeners on TikTok"
        title1="Creators use your music in their videos"
        title2="Your music spreads on TikTok"
        title3="Opportunity to go viral"
        title4="Videos you can share with your followers"
      />
      <div className="creators-container section--padding flex--center">
        <div className="vid-text">
          <h3>Our creators are ready to use your music in their videos</h3>
          <h5>
            Our vetted network of active creators will make content using your
            music and share it with their followers
          </h5>
          <div className="tiktok-btn">
            <button className="btn" onClick={() => navigate("/start-campaign")}>
              Start Campaign <BiRightArrowAlt className="icon btn-icon" />
            </button>
          </div>
        </div>
        <div className="vid-box">
          <div className="vid">
            <video src={tiktok1} loop muted autoPlay playsInline />
          </div>
          <div className="vid">
            <video
              src={tiktok2}
              className="bounce-top"
              loop
              autoPlay
              muted
              playsInline
            />
          </div>
          <div className="vid">
            <video src={tiktok3} loop muted autoPlay playsInline />
          </div>
        </div>
      </div>
      <Questions />
      <Footer />
    </div>
  );
};

export default Tiktok;
