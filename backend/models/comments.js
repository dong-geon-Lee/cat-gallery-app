const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  image: { type: mongoose.Types.ObjectId, ref: "Image", required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model("Comment", commentSchema);
