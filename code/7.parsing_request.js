const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("In other middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text"/><button type="submit" value="submit"/></form>'
  );
});

app.use("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("this always runs");
});

app.listen(8000);
