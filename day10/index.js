import http from "http";
import app from "./app.js";

let PORT = 8080;
let server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
