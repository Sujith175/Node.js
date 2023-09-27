const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "pages/shop.html"));
});

module.exports = router;
