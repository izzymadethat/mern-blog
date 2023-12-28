import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
  return (
    <div className="post">
      <div className="post-image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="post-content">
        <Link to={"/post/id"}>
          <h2>{title}</h2>
        </Link>
        <p className="post-info">
          <a href="#author" className="author">
            {author.username}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="post-summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
