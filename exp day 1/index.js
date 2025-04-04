import express from "express";
const PORT = 5000;

let app = express();

// //parse

// function parse(req, res, next) {
//   console.log("parse is successful");
//   next();
// }
// //auth
// function auth(req, res, next) {
//   console.log("auth is successful");
//   next();
// }
// //router
// function route(req, res, next) {
//   console.log("router is successful");
//   next();
// }

app.use(
  function (req, res, next) {
    console.log("parse is successful");
    next();
  },
  function (req, res, next) {
    console.log("auth is successful");
    next();
  },
  function (req, res, next) {
    console.log("router is successful");
    next();
  }
);
app.get("/home", (req, res, next) => {
  res.send("home page");
});

app.listen(PORT, (err) => {
  console.log("server is on 5000........");
});
