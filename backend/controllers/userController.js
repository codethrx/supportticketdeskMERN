//imports
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const expressAsyncHandler = require("express-async-handler");
const generateJWT = require("../utils/jwt");
// controllers
//@desc- login a user
//@route- /api/auth/login
//@access- public
const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists && (await bcrypt.compare(password, userExists.password))) {
    res.status(200).json({
      name: userExists.name,
      email: userExists.email,
      token: generateJWT(userExists._id),
    });
  } else {
    res.status(400);
    throw new Error("User doesnot exist.");
  }
});
//@desc- register a user
//@route- /api/auth/register
//@access- public
const register = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Validation Error! Please Include all fields.");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }
  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({ email, name, password: hashedPassword });
  //creation of the user
  if (newUser) {
    res.status(201).json({
      email: newUser.email,
      name: newUser.name,
      token: generateJWT(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});
//@desc- user details
//@route- /api/auth/me
//@access- private
const me = (req, res) => {
  res.json({ message: req.user });
};

module.exports = { login, me, register };
