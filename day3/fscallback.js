// import fs from "fs";

// error first callback

/*fs.writeFile("demo1.txt", "hello everyone", (err) => {
  if (err) console.log(err);
  console.log("file written");
});
*/

/*fs.readFile("./demo1.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
*/

/*fs.appendFile("./demo1.txt", "\nhow are you all", (err) => {
  if (err) console.log(err);
  console.log("file written");
});
*/

/*fs.unlink("./demo1.txt", (err) => {
  if (err) console.log(err);
  console.log("file written");
});
*/

/*fs.mkdir("react", (err) => {
  if (err) console.log(err);
  console.log("file written");
});
*/

/*fs.rmdir("react", (err) => {
  if (err) console.log(err);
  console.log("file written");
});
*/

/////////////////////////////////////////////////////

import { log } from "console";
import fs from "fs/promises";

//fs in promises

/*const data = fs.writeFile("./text.txt", "welcome to all");
console.log(data);
*/

/*fs.writeFile("./text.txt", "welcome to all")
  .then(() => {
    console.log("file written");
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*fs.readFile("./text.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

//async & await

/*async function resolvePromise() {
  try {
    let data = await fs.readFile("./text.txt", "utf-8");
    console.log(data);
  } catch {
    console.log(err);
  }
}
resolvePromise();
*/

////////////////////////////////////////////////////////////////////////

