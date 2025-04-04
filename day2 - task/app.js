
// import c, { a, b } from "./index.js";

// console.log(a);
// console.log(b());
// console.log(c());

/////////////////////////////////////////////or another way

// import * as module1 from "./index.js";

// console.log(module1.a);
// console.log(module1.b());
// console.log(module1.default());

///////////////////////////////////////////another way to call

let { m, a, b, c } = require("./index.js");

console.log(a);
console.log(b);
console.log(c());

console.log(m);
