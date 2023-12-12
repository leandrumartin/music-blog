const BlogPostList = ({ blogPosts }) => {
  return (
    <div>
      {blogPosts.map((blogPost) => (
        <div className="card m-3 p-2 shadow-sm">
          <img
            src={blogPost.imagePath}
            alt={blogPost.imageAlt}
            class="card-img-top text-center"
            style={{ height: "100px", width: "100px" }}
          />
          <div className="card-body">
            <h2 className="card-title">{blogPost.title}</h2>
            <p className="card-text">{blogPost.synopsis}</p>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#blog-" + blogPost.id}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Read
            </button>

            <div className="collapse" id={"blog-" + blogPost.id}>
              <iframe
                src={blogPost.path}
                style={{ "min-height": "500px" }}
                // width={"100%"}
                // height={"100%"}
                // className="w-100 vh-100"
                // className="min-h-50"
                className="w-100 mh-100"
              ></iframe>
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#blog-" + blogPost.id}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Close blog post
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
