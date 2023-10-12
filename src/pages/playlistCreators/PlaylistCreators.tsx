import "./PlaylistCreators.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { images } from "../../constant";

import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Service from "../../layouts/service/Service";
import { useNavigate } from "react-router-dom";

const PlaylistCreators = () => {
  const navigate = useNavigate();
  return (
    <div className="playlist-container">
      <Navbar />
      <div
        className="tiktok-creators-header flex--center section--padding"
        id="playlist-header"
      >
        <h3>For TikTok Creators</h3>
        <h1>
          Make <span style={{ color: "mediumseagreen" }}>money</span> from your{" "}
          <span style={{ color: "dodgerblue" }}>Playlists</span>
        </h1>
        <h4>Join our network today</h4>
        <button
          className="btn creators-btn"
          onClick={() => navigate("/sign-in")}
        >
          Apply Now <BiRightArrowAlt className="icon btn-icon" />
        </button>
      </div>
      <div className="playlist-img flex--center section--padding">
        <img src={images.playlist1} />
      </div>
      <Service
        title="playlist curators"
        subtitle="Get paid and grow your lists"
        para="Get paid per review as your lists gain more attention"
        photo1={images.appImg3}
        photo2={images.appImg4}
      />
      <Footer />
    </div>
  );
};

export default PlaylistCreators;
