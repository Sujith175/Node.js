const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/view", (req, res, next) => {
  res.sendFile(path.join(rootDir, "pages", "shop.html"));
});

module.exports = router;
