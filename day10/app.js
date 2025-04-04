import express from "express";

let app = express();
let tasks = [
  {
    id: 1,
    task: "reading books",
  },
  {
    id: 2,
    task: "listening music",
  },
];

app.use(express.json());

app.get("/tasks", (req, res, next) => {
  res.send(tasks);
});
app.get("/tasks/:id", (req, res, next) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((item) => item.id === id);
  if (!task) {
    res.send("task not found");
  }
  res.send(task);
});
app.post("/tasks", (req, res, next) => {
  tasks.push({
    id: tasks.length + 1,
    task: req.body.task,
  });
  res.send(tasks);
});
export default app;
