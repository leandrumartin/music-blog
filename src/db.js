// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
console.log(mongoose);

let dbConnection;

module.exports = {
  connectToDb: async (cb) => {
    try {
      mongoose.set("strictQuery", false);
      dbConnection = await mongoose.connect(
        "mongodb+srv://leandrumartin:<password>@music.acwa3mu.mongodb.net/?retryWrites=true&w=majority"
      );
      return cb();
    } catch (err) {
      console.error(err);
      return cb(err);
    }
  },
  getDb: () => dbConnection,
};
