import "./Payouts.css";

type getType = {
  lottieIcon: JSX.Element;
  title: string;
  para: string;
};

const Payouts = ({ lottieIcon, title, para }: getType) => {
  return (
    <div className="payouts-card">
      {lottieIcon}
      <h5>{title}</h5>
      <p>{para}</p>
    </div>
  );
};

export default Payouts;
