// import event from "event";
// console.log(event);

/*import EventEmitter from "events";

class myClass extends EventEmitter {}

let student = new myClass();


//parents
student.on("result", (grade) => {
  if (grade === "distinct") {
    console.log("parents are happy");
  } else {
    console.log("parents are sad");
  }
});

//relatives
student.on("result", (grade) => {
  if (grade === "distinct") {
    console.log("relatives are sad");
  } else {
    console.log("relatives are happy");
  }
});

//friends
student.on("result", (grade) => {
  if (grade === "distinct") {
    console.log("let's party");
  } else {
    console.log("let's party");
  }
});

student.emit("result", "distinct");
student.emit("result", "fail");

*/

////////////////////////////////////////////once event

//once event
import EventEmitter from "events";

let emitter = new EventEmitter();

//this is asynchronous function which lets event emit only once

emitter.once("work", () => {
  console.log("work at only one time");
});
// emitter.emit("work");
// emitter.emit("work");
// emitter.emit("work");

//this gives number of event count
console.log(emitter.listenerCount("work"));
