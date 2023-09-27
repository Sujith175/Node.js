const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); //to work the second middleware, show them
});

app.use((req, res, next) => {
  console.log("In other middleware");
});

const server = http.createServer(app);

server.listen(3000);
