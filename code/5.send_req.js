const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  next(); //to work the second middleware, show them
});

app.use((req, res, next) => {
  console.log("Middeleware 2");
  res.send("<h1>Welcome all</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
