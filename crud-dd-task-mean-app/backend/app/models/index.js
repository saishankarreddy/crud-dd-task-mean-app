const mongoose = require("mongoose");


  process.env.MONGO_URI || "mongodb://localhost:27017/meanapp";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = MONGO_URI;

// Import models
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;