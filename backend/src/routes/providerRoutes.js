const express = require("express");
const auth = require("../middleware/auth");

const providerController = require("../controllers/providerController");

const router = express.Router();

router.post("/register", providerController.register);
router.post("/login", providerController.login);

router.get("/profile", auth, providerController.providerProfile);
router.put("/update", auth, providerController.updateProvider);
router.delete("/delete", auth, providerController.deleteProvider);

router.post("/logout", providerController.logout);

module.exports = router;
