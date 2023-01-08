const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  image: { type: mongoose.Types.ObjectId, ref: "Image", required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Like", likeSchema);
