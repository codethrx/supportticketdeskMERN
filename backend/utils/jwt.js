const jwt = require("jsonwebtoken");
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "20d" });
};
module.exports = generateJWT;
