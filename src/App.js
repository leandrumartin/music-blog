import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import BlogPostList from "./BlogPostList";
import Blogs from "./Blogs";

function App() {
  let blogs = Blogs();
  return (
    <div className="App">
      <Navbar blogPosts={blogs} />
      <BlogPostList blogPosts={blogs} />
    </div>
  );
}

export default App;
