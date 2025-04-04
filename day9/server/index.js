import { createServer } from "http";
let PORT = 8080;
let server = createServer((req, res) => {
  let employees = [
    {
      name: "rajini",
      esal: 20000,
      skills: ["html", "css"],
    },
    {
      name: "kamal",
      esal: 50000,
      skills: ["node", "js"],
    },
  ];
  res.writeHead(200, "okay", {
    "content-type": "application/json",
    "access-control-allow-origin": "http://127.0.0.1:5500",
    "access-control-allow-origin": "*",
  });
  res.end(JSON.stringify(employees));
});
server.listen(PORT, () => {
  console.log("server is started");
});
