import { DiscussionEmbed } from "disqus-react";

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
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#blog-content-" + blogPost.id}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Read
            </button>
            <div className="collapse" id={"blog-content-" + blogPost.id}>
              <iframe
                src={blogPost.path}
                style={{ "min-height": "500px" }}
                className="w-100 mh-100 my-3"
              ></iframe>

              <DiscussionEmbed
                shortname="leandrumartin"
                config={{
                  url: "leandrumartin.github.io/music-blog",
                  identifier: blogPost.id,
                  title: blogPost.title,
                  language: "en_US",
                }}
              />

              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#blog-content-" + blogPost.id}
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
