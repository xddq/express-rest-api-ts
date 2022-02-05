import express from "express"
import todosRouter from "./routes/todos"

// creates an express app.
const app = express()

// NOTE(pierre): the order of app.use actually does matter. It is fifo applied
// to our app.

// adds json middleware to express. enables us to get json data from the
// request. Parses request to json.
app.use(express.json())

app.use("/todos", todosRouter)

// starting the serve and listening on port 3001.
app.listen(3001, () => console.log("Listening on port 3001!"))
