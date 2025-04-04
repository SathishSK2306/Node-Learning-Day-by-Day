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
// fs.rmdirSync("./my folder");

////////////////////////////////n       Task        ////////////////////

// fs.mkdirSync("React-app");
// fs.mkdirSync("public");
// fs.mkdirSync("src", "Components");

//////////////////////////  File Creation Method    ////////////////////
fs.mkdirSync("React-app");
fs.mkdirSync("React-app/public");
fs.mkdirSync("React-app/src");
fs.mkdirSync("React-app/src/Components");
fs.writeFileSync("React-app/src/Components/Home.jsx", "");
fs.writeFileSync("React-app/src/Main.jsx", "");
fs.writeFileSync("React-app/src/Index.html", "");
    