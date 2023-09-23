import { useNavigate } from "react-router-dom";
import "./Help.css";

import { TfiWorld, TfiSearch } from "react-icons/tfi";
import Team from "../../component/team/Team";
import { data } from "../../constant";

const Help = () => {
  const navigate = useNavigate();
  return (
    <div className="help-container">
      <div className="help-searchbar">
        <div className="searchbar-logo">
          <div className="logo">
            <span className="logo-text">Play.</span>clone
          </div>

          <div className="searchbar-nav">
            <div className="selectlink">
              Go to{" "}
              <a href="#" onClick={() => navigate("/")}>
                Play.Clone
              </a>
            </div>
            <div className="selectbox">
              <TfiWorld className="icon-help" />
              <select>
                <option value="1">English</option>
              </select>
            </div>
          </div>
        </div>
        <div className="searchbar flex--center">
          <h2>Advice and answers from the Play.Clone Team</h2>
          <div className="searchbox-btn">
            <TfiSearch className="searchbox-icon" />{" "}
            <input
              type="searchbox"
              className="searchbox-text"
              placeholder="Search for articles..."
            />
          </div>
        </div>
      </div>

      <div className="help-box">
        {data.teamData.map((Data, index) => (
          <Team
            key={index}
            userIcon={Data.userIcon}
            title={Data.title}
            subtitle={Data.subtitle}
            viewer={Data.viewer}
            views={Data.views}
          />
        ))}
      </div>

      <div className="help-footer">
        <p>2023 Jannis, All right reserved for Play.Clone</p>
      </div>
    </div>
  );
};

export default Help;
