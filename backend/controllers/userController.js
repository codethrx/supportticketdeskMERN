//imports

// controllers
//@desc- login a user
//@route- /api/auth/login
//@access- public
const login = (req, res) => {
  res.json({ message: "Login" });
};
//@desc- register a user
//@route- /api/auth/register
//@access- public
const register = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Validation Error! Please Include all fields.");
  }
  res.json({ done: true });
};
//@desc- user details
//@route- /api/auth/me
//@access- private
const me = (req, res) => {
  res.json({ message: "me" });
};

module.exports = { login, me, register };
