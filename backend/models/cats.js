const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  breeds: { type: String },
  age: { type: Number },
  name: { type: String },
  description: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("Cat", catSchema);
