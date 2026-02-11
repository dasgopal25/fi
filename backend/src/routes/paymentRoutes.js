const express = require("express");
const auth = require("../middleware/auth");
const { demoPayment } = require("../controllers/paymentController");

const router = express.Router();

router.post("/demo", auth, demoPayment);

module.exports = router;
