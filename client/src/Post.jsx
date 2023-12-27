const Post = () => {
  return (
    <div className="post">
      <div className="post-image">
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="blog header. a simple home studio setup"
        />
      </div>
      <div className="post-content">
        <h2>How to build the perfect home studio</h2>
        <p className="post-info">
          <a href="#author" className="author">
            Isaiah Vickers
          </a>
          <time>2023-12-26 13:44</time>
        </p>
        <p className="post-summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          nihil quaerat ullam, quia eum aspernatur libero! Alias maxime sequi
          rem aliquid delectus ea? Rerum voluptas illum, ratione quos sed
          impedit?
        </p>
      </div>
    </div>
  );
};

export default Post;
