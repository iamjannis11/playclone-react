import "./Service.css";

type getType = {
  title: string;
  subtitle: string;
  para: string;
  photo1: string;
  photo2: string;
};
const Service = ({ title, subtitle, para, photo1, photo2 }: getType) => {
  return (
    <div className="service-container section--padding flex--center">
      <h4>{title}</h4>
      <h2>How it works</h2>
      <div className="app-container">
        <div className="app-box">
          <div className="app-title">
            <h3>Join our network</h3>
            <p>Applications are reviewed by our team for approval</p>
          </div>
          <div className="app-img">
            <img src={photo1} alt="" />
          </div>
        </div>

        <div className="app-dash"></div>

        <div className="app-box">
          <div className="app-img">
            <img src={photo2} alt="" />
          </div>
          <div className="app-title">
            <h3>{subtitle}</h3>
            <p>{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
