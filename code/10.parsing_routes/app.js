const express = require("express");
// const bodyparser = require("body-parser");

const app = express();

// app.use(bodyparser.urlencoded({ extended: true }));

app.get("/add-product", (req, res, next) => {
  console.log("In other Middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit" >Submit</button></form>'
  );
});
app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send(`<h1>Thank You</h1>`);
});

app.listen(8000, () => {
  console.log(`server is running at 8000`);
});
