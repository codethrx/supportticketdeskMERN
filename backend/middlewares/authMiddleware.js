const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      //get token from header
      token = authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET);
      console.log(decoded);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (e) {
      console.log(e);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized");
  }
});
module.exports = authMiddleware;
