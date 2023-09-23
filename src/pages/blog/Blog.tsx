import "./Blog.css";
import { data } from "../../constant";

import Article from "../../component/article/Article";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-container">
      <div className="blog-header section--padding">
        <div className="blog-text flex--center">
          <div className="logo blog-logo">
            <span className="logo-text">Play.</span>clone
          </div>
          <p>Music Promotion Blog</p>
        </div>
      </div>
      <div className="blog-posts section--padding">
        {data.articlePost.map((posts, index) => (
          <Article
            key={index}
            photo={posts.photo}
            subtitle={posts.subtilte}
            title={posts.title}
            description={posts.description}
            date={posts.date}
            duration={posts.duration}
          />
        ))}
      </div>
      <div className="blog-footer">
        <p>
          more info on what we do, visit our{" "}
          <a href="#" onClick={() => navigate("/")}>
            homepage
          </a>
        </p>
      </div>
    </div>
  );
};

export default Blog;
