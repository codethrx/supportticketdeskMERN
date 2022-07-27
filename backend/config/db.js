const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected to ${conn.connection.host}`.green);
  } catch (e) {
    console.log(`Error:${e.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
