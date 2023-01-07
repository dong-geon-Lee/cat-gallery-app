const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  breeds: { type: String, required: true },
  age: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Cat", catSchema);
