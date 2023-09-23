import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { BiRightArrowAlt } from "react-icons/bi";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="signIn-container section--padding">
      <div
        className="signIn-box"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <span className="logo">
          <span className="logo-text">Play.</span>Clone
        </span>
        <h4>Sign in or Create an account</h4>
        <div className="signIn-email-box">
          <h5>Your Email Address</h5>
          <input type="email" placeholder="example@domain.com" />
          <button className="btn-box">
            Continue
            <BiRightArrowAlt className="icon btn-icon" />
          </button>
        </div>
      </div>
      <div className="signIn-footer">
        <p>
          want to start the campaign, visit our{" "}
          <a href="#" onClick={() => navigate("/start-campaign")}>
            campaign
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
