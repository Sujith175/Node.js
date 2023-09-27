const express = require("express");
const bodyparser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);

app.use("/shop", shopRoute);

app.use((req, res, next) => {
  res.status(404).send(`<h1 style="color: "red"">Page not Found</h1>`);
});

app.listen(8000, () => {
  console.log(`server is running at 8000`);
});
