import fs, { ReadStream } from "fs";

let allocatedBuffer = Buffer.alloc(150);
console.log(allocatedBuffer);

allocatedBuffer.write("hello");
console.log(allocatedBuffer);

// fs.writeFileSync(
//   "demo.txt",
//   "To dynamically add expense data to your Pie Chart, you need to:Pass data as props from your parent component (App.js).Update the Pie Chart dynamically based on the expenses."
// );

// allocatedBuffer.write("./demo.txt");
// console.log(allocatedBuffer);

let readStream = fs.createReadStream("./demo.txt");

readStream.on("data", (chunk) => {
  console.log("-----------------chunk----------------------");
  console.log(chunk);
});
