import "./TiktokCreators.css";
import { useNavigate } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import Lottie from "lottie-react";
import { images } from "../../constant";

import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Payouts from "../../layouts/payouts/Payouts";
import Service from "../../layouts/service/Service";
import Rating from "../../layouts/rating/Rating";

import { Lottie1, Lottie2, Lottie3, Lottie4 } from "../../constant";

const TiktokCreators = () => {
  const navigate = useNavigate();
  return (
    <div className="tiktok-creators-container">
      <Navbar />
      <div className="tiktok-creators-header flex--center section--padding">
        <h3>For TikTok Creators</h3>
        <h1>
          Make <span style={{ color: "darkturquoise" }}>money</span> by using{" "}
          <span style={{ color: "brown" }}>TikTok</span> sounds
        </h1>
        <h4>Join our network today</h4>
        <button
          className="btn creators-btn"
          onClick={() => navigate("/sign-in")}
        >
          Apply Now <BiRightArrowAlt className="icon btn-icon" />
        </button>
      </div>
      <Rating />
      <Service
        title="Tiktok Creators"
        subtitle="Post videos and get paid"
        para="Upload your videos to TikTok and get paid fast"
        photo1={images.appImg1}
        photo2={images.appImg2}
      />
      <div className="payouts-container section--padding">
        <div className="payouts-text">
          <h2>Get paid to listen and review music</h2>
          <p>
            We pay you to listen and review songs, if you like it, you can
            consider adding it to one of your playlists. To qualify as a curator
            you need to own a playlist with REAL organic followers on Spotify.
          </p>
        </div>
        <div className="payouts-box">
          <Payouts
            lottieIcon={
              <Lottie
                className="lottie-icon"
                animationData={Lottie1}
                loop={true}
              />
            }
            title="Up to @250 per video"
            para="Creators earn up to $250 for each video"
          />
          <Payouts
            lottieIcon={
              <Lottie
                className="lottie-icon"
                animationData={Lottie2}
                loop={true}
              />
            }
            title="Instant payouts"
            para="Request a payout at any time, we pay directly to your bank account"
          />
          <Payouts
            lottieIcon={
              <Lottie
                className="lottie-icon"
                animationData={Lottie3}
                loop={true}
              />
            }
            title="Support indie artists"
            para="Help new and upcoming artists by using their music"
          />
          <Payouts
            lottieIcon={
              <Lottie
                className="lottie-icon"
                animationData={Lottie4}
                loop={true}
              />
            }
            title="Discover new music"
            para="Find great new music for your TikTok videos"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TiktokCreators;
