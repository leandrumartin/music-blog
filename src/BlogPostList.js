import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";

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
              data-bs-target={"#blog-" + blogPost.id}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Read
            </button>

            <div className="collapse" id={"blog-" + blogPost.id}>
              {/* {blogPost.content} */}
              <iframe
                src={"./Blogs/blog-" + blogPost.id + ".html"}
                width={"100%"}
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
