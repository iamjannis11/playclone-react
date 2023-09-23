import "./Article.css";

type getType = {
  photo: string;
  subtitle: string;
  title: string;
  description: string;
  date: string;
  duration: string;
};

const Article = ({
  photo,
  subtitle,
  title,
  description,
  date,
  duration,
}: getType) => {
  return (
    <div className="article-card">
      <div className="article-img">
        <img src={photo} alt="" />
      </div>
      <div className="article-text">
        <h5>{subtitle}</h5>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="article-span">
          <p>{date}</p>
          <p>.</p>
          <p>{duration}</p>
        </span>
      </div>
    </div>
  );
};

export default Article;
