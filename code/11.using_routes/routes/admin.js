const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In other Middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit" >Submit</button></form>'
  );
});

router.post("admin/product", (req, res) => {
  console.log(req.body);
  res.redirect("/admin");
});

module.exports = router;
