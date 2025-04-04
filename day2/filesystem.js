import fs from "fs";
/*
//utilities deals with file system

fs.writeFileSync("./demo.txt", "good morning");

let data = fs.readFileSync("./demo.txt", "utf-8");
console.log(data.toString("utf-8"));
console.log(data);
*/

// fs.appendFileSync("./demo.txt", "\nGood afternoon");
// fs.unlinkSync("./demo.txt");

// fs.mkdirSync("my folder"); //create the folder
// fs.rmdirSync("my folder");
// fs.rmdirSync("React");
fs.mkdirSync("React");
fs.mkdirSync("./React/public");
fs.mkdirSync("./React/Src");
fs.mkdirSync("./React/Src/Components");
fs.writeFileSync("./React/Src/Components/Home.jsx", "");
fs.writeFileSync("./React/Src/main.jsx", "");
fs.writeFileSync("./React/Src/Index.html.jsx", "");
