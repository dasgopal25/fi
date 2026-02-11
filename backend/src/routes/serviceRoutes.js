const express = require("express");
const { getProviders } = require("../controllers/serviceController");

const router = express.Router();

router.get("/providers", getProviders);

module.exports = router;
