import React from "react";
import "./Navbar.css";

import SubNav from "../subNav/SubNav";
import { BsSpotify, BsTiktok } from "react-icons/bs";
import { TbBrandSpotify, TbBrandTiktok } from "react-icons/tb";
import { BiRightArrowAlt, BiMenu, BiMobile } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <span className="logo">
        <span className="logo-text">Play.</span>clone
      </span>
      <div className="navbar-links">
        <div className="navbar-links-container">
          <div className="navbar-title">Music Promotion</div>
          <nav className="dropdown-toggle">
            <div className="option-list">
              <h4>Services for artists</h4>
              <div className="option-list-links">
                <SubNav
                  icon={
                    <BsSpotify className="icon" onClick={() => navigate("/")} />
                  }
                  name="Spotify Promotion"
                  description="Get your Music onto Videos"
                />
                <SubNav
                  icon={
                    <BsTiktok
                      className="icon"
                      onClick={() => navigate("/tiktok-promotion")}
                    />
                  }
                  name="TikTok Promotion"
                  description="Get your Music onto Playlists"
                />
              </div>
            </div>
          </nav>
        </div>
        <div className="navbar-links-container">
          <div className="navbar-title">Creator SignUp</div>
          <nav className="dropdown-toggle">
            <div className="option-list">
              <h4>Creator SignUp</h4>
              <div className="option-list-links">
                <SubNav
                  icon={
                    <TbBrandTiktok
                      className="icon"
                      onClick={() => navigate("/tiktok-creators")}
                    />
                  }
                  name="Tiktok Creators"
                  description="Use sounds, Get Paid"
                />
                <SubNav
                  icon={
                    <TbBrandSpotify
                      className="icon"
                      onClick={() => navigate("/playlist-creators")}
                    />
                  }
                  name="Playlist Curators"
                  description="Discover new music, Get Paid"
                />
              </div>
            </div>
          </nav>
        </div>
        <div className="navbar-title" onClick={() => navigate("/blog")}>
          Blog
        </div>
        <div className="navbar-title" onClick={() => navigate("/help")}>
          Help
        </div>
      </div>

      <div className="navbar-login">
        <button className="btn" onClick={() => navigate("/sign-in")}>
          Sign In <BiRightArrowAlt className="icon btn-icon" />
        </button>
        <button className="btn" onClick={() => navigate("/start-campaign")}>
          Start Campaign <BiRightArrowAlt className="icon btn-icon" />
        </button>
      </div>

      {/* This is for smallscreen */}
      <div className="navbar-smallscreen">
        <BiMenu
          fontSize="var(--icon-font)"
          fill="var(--white-color)"
          cursor="pointer"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flip-in-hor-bottom">
            <BiMobile
              className="overlay-icon"
              onClick={() => setToggleMenu(false)}
            />
            <div className="navbar-smallscreen-links">
              <div className="navbar-links-container">
                <nav className="stop-dropdown-toggle">
                  <div className="option-list">
                    <h4>Services for artists</h4>
                    <div className="option-list-links">
                      <SubNav
                        icon={
                          <BsSpotify
                            className="icon"
                            onClick={() => navigate("/")}
                          />
                        }
                        name="Spotify Promotion"
                        description="Get your Music onto Videos"
                      />
                      <SubNav
                        icon={
                          <BsTiktok
                            className="icon"
                            onClick={() => navigate("/tiktok-promotion")}
                          />
                        }
                        name="TikTok Promotion"
                        description="Get your Music onto Playlists"
                      />
                    </div>
                  </div>
                </nav>
              </div>
              <div className="navbar-links-container">
                <nav className="stop-dropdown-toggle">
                  <div className="option-list">
                    <h4>Creator SignUp</h4>
                    <div className="option-list-links">
                      <SubNav
                        icon={
                          <TbBrandTiktok
                            className="icon"
                            onClick={() => navigate("/tiktok-creators")}
                          />
                        }
                        name="Tiktok Creators"
                        description="Use sounds, Get Paid"
                      />
                      <SubNav
                        icon={
                          <TbBrandSpotify
                            className="icon"
                            onClick={() => navigate("/playlist-creators")}
                          />
                        }
                        name="Playlist Curators"
                        description="Discover new music, Get Paid"
                      />
                    </div>
                  </div>
                </nav>
              </div>
              <div className="navbar-title" onClick={() => navigate("/blog")}>
                Blog
              </div>
              <div className="navbar-title" onClick={() => navigate("/help")}>
                Help
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
