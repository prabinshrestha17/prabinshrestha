const mongoose = require("mongoose");
const { mongoUri } = require("../api/dotenv");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};
module.exports = connectDB;
