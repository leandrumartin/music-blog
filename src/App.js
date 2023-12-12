import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import BlogPostList from "./BlogPostList";
import Blogs from "./Blogs";
const { BlogPostSchema } = require("./models/BlogPost");

const { connectToDb, getDb } = require("./db");

// Database connection
let db;
await connectToDb((err) => {
  if (!err) {
    db = getDb();
    console.log(db);
  } else {
    console.log(err);
  }
});

console.log(db);

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
