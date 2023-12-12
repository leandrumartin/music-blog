const BlogPostList = ({ blogPosts }) => {
  return (
    <div>
      {blogPosts.map((blogPost, blogIndex) => (
        <div className="card">
          <div className="card-title">
            <h2 className="card-title">{blogPost.title}</h2>
            <p className="card-text">{blogPost.synopsis}</p>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#blog-" + blogIndex}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Read
            </button>

            <div className="collapse" id={"blog-" + blogIndex}>
              {blogPost.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
