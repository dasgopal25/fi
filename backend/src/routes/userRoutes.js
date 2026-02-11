const express = require("express");
const auth = require("../middleware/auth");

const {
  registerUser,
  loginUser,
  logout,
  deleteUser,
  updateUser,
  getProfile,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);

router.get("/profile", auth, getProfile);
router.put("/update", auth, updateUser);

router.delete("/delete", auth, deleteUser);

module.exports = router;
