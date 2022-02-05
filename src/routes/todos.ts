import { Router } from "express";
import { Todo } from "../types/todos";
import { v4 as uuidv4 } from "uuid";
import checkAuth from "../middleware/checkAuthenticated";

// can use this to group routes
const router = Router();

// this is our mock db for now.  will be reset every time we change and save the
// file.. but its enough for testing express out. :D
const todos: Todo[] = [
  { uuid: "123", title: "pet the lion", completed: false },
  { uuid: "1234", title: "walk the giraffe", completed: true },
];

// NOTE(pierre): We could remove the /todos/ prefix for each route by using
// app.use("/todos",routerHere) inside index.ts

// defines a route
// get --> HTTP METHOD GET
router.get("", (_, res) => {
  return res.json(todos);
});

// gets a single todo based on uuid.
router.get("/:uuid", (req, res) => {
  // desctructure the uuid
  const { uuid } = req.params;
  const todo = todos.find((todo) => todo.uuid === uuid);
  return res.json(todo);
});

// updates a single todo.
router.put("/:uuid", checkAuth, (req, res) => {
  const { uuid } = req.params;
  const { title, completed } = req.body;

  // error out if required data was not given.
  if (!title || !completed) {
    return res.sendStatus(400);
  }
  const index = todos.findIndex((todo) => todo.uuid === uuid);
  // error out if todo was not found.
  if (index === -1) {
    return res.sendStatus(404);
  }
  const updatedTodo = { title, completed, uuid };
  todos[index] = updatedTodo;
  return res.json(updatedTodo);
});

// post --> HTTP METHOD POST. used to create data for a given entity.
router.post("", (req, res) => {
  const { title } = req.body;
  // error out if empty title.
  if (!title) {
    return res.sendStatus(400);
  }
  const todo: Todo = {
    uuid: uuidv4(),
    title,
    completed: false,
  };
  todos.push(todo);
  // res.send(200);
  return res.json(todo);
});

// delete --> HTTP METHOD DELETE. used to delete data from a given entitity.
// This will specifically enable the checkAuth middleware before processing the
// delete /:uuid route for our todos.
router.delete("/:uuid", checkAuth, (req, res) => {
  const { uuid } = req.params;
  const index = todos.findIndex((todo) => todo.uuid === uuid);
  // error out if todo was not found.
  if (index === -1) {
    return res.sendStatus(500);
  }
  const deletedTodo = todos[index];
  todos.splice(index, 1);
  return res.json(deletedTodo);
});

export default router;
