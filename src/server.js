const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("App listening on port ${PORT}");
});

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
