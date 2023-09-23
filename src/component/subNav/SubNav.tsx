import "./SubNav.css";

type getType = {
  icon: iconType;
  name: string;
  description: string;
};

export default function SubNav({ icon, name, description }: getType) {
  return (
    <div className="nav-sub-links">
      <a href="" className="nav-link">
        {icon}
        <div className="nav-para">
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
