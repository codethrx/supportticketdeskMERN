const router = require("express").Router();
const { login, register, me } = require("../controllers/userController");
const protected = require("../middlewares/authMiddleware");
router.post("/register", register);
router.post("/login", login);
router.get("/me", protected, me);
module.exports = router;
