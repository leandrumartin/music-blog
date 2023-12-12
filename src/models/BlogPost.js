const mongoose = require("mongoose");
const BlogPostSchema = new mongoose.Schema({
  title: String,
  albumId: String,
  synopsis: String,
  content: String,
});
module.exports = mongoose.model("BlogPost", BlogPostSchema);
