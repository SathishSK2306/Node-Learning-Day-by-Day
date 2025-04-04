import fs from "fs";

// let readStream = fs.createReadStream("./text.txt", {
//   highWaterMark: 3,
//   encoding: "utf-8",
// });

// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// let writeStream = fs.createWriteStream("text.txt");

// writeStream.write("hello good after noon", (err) => {
//   if (err) console.log(err);
//   console.log("file written");
// });

let readStream = fs.createReadStream("./test.txt", {});
let writeStream = fs.createWriteStream("text.txt");

// readStream.on("data", (chunk) => {
//   writeStream.write(chunk, (err) => {
//     if (err) console.log(err);
//     console.log("file written");
//   });
// });

readStream.pipe(writeStream);
