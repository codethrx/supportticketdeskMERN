//IMPORTS
const express = require("express");
const config = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const errorMiddleware = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
connectDB();
//init app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use((req, res, next) => {
  console.log(`Method ${req.method}`.america);
  console.log(`Path ${req.path}`.gray);
  next();
});
app.use("/api/auth", require("./routes/userRoutes"));
//error handling middleware
app.use(errorMiddleware);
//listening to port #
app.listen(PORT, () => {
  console.log(`Server started on port#${PORT}`);
});
