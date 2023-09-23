import "./Hero.css";
import Header from "../header/Header.tsx";
import Promotion from "../promotion/Promotion.tsx";
import Feedback from "../feedback/Feedback.tsx";
import Questions from "../questions/Questions.tsx";

import { images, spotifyVid } from "../../constant/index.tsx";

const Hero = () => {
  return (
    <main className="hero-container">
      <div id="spotify-playlist">
        <Header
          name="Playlist"
          title=" Promotion made easy"
          subtitle="Get on organic playlists — Submit music to Spotify playlists"
          photo={images.heroHeader1}
        />
      </div>
      <Promotion
        vid={spotifyVid}
        subtitle="Spotify music promotion"
        title="Reach millions of listeners on Spotify"
        title1="Conntect with playlist curators instantly"
        title2="Tigger the Spotify algorithm"
        title3="Drive long-term results"
        title4="Measure and maximize your impact"
      />
      <Feedback />
      <Questions />
    </main>
  );
};

export default Hero;
