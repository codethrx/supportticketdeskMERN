const router = require("express").Router();
const { login, register, me } = require("../controllers/userController");
router.post("/register", register);
router.post("/login", login);
router.get("/me", me);
module.exports = router;
