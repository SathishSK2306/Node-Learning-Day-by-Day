// import http from "http";

let http = require("http");

let server = http.createServer((req, res) => {
  res.write("hello world!");
  res.end();
});
server.listen(5000, () => {
  console.log("server is on 5000.............");
});
