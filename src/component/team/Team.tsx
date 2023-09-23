import "./Team.css";

import { images } from "../../constant";

type getType = {
  userIcon: JSX.Element;
  title: string;
  subtitle: string;
  viewer: string;
  views: string;
};

const Team = ({ userIcon, title, subtitle, viewer, views }: getType) => {
  return (
    <div className="team-card">
      <div className="card-icon">{userIcon}</div>
      <div className="card-text">
        <h5>{title}</h5>
        <p>{subtitle}</p>
        <div className="viewers flex--center">
          <img src={images.user} className="user-img" />
          <p>{viewer}</p>
          <p> . </p>
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
