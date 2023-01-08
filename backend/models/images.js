const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  file: { type: Buffer, required: true },
  mimetype: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Image", imageSchema);
