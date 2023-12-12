const BlogPostList = ({ blogPosts }) => {
  return (
    <div>
      {blogPosts.map((blogPost) => (
        <div className="card m-3 p-2 shadow-sm" id={"blog-" + blogPost.id}>
          <div className="card-header">
            {
              blogPost.imagePath && (
                <img
                  src={blogPost.imagePath}
                  alt={blogPost.imageAlt}
                  class="card-img-top text-center"
                  style={{ height: "100px", width: "100px" }}
                />
              ) // Show image only if image path exists
            }
            <h2 className="card-title">{blogPost.title}</h2>
            <p className="card-text">{blogPost.subtitle}</p>
          </div>

          <div className="card-body">
            <a
              class="btn btn-primary mx-2"
              href={blogPost.path}
              target="_blank"
              role="button"
            >
              Read in a new tab
            </a>
            <button
              class="btn btn-primary mx-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#blog-content-" + blogPost.id}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Expand and read
            </button>
            <div className="collapse" id={"blog-content-" + blogPost.id}>
              <iframe
                src={blogPost.path}
                style={{ "min-height": "500px" }}
                className="w-100 mh-100"
              ></iframe>
              <a
                class="btn btn-primary mx-2"
                href={blogPost.path + "#disqus_thread"}
                target="_blank"
                role="button"
              >
                Go to comments
              </a>
              <button
                class="btn btn-primary mx-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#blog-content-" + blogPost.id}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Collapse blog post
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
