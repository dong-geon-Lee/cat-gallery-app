const mongoose = require("mongoose");

const connectedDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL, () => {
      console.log("MongoDB Connected!");
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectedDB;
