import express from "express"
import todosRouter from "./routes/todos"

// creates an express app.
const app = express()

// adds json middleware to express. enables us to get json data from the
// request.
app.use(express.json())

// app.use("", todosRouter)
app.use("/todos", todosRouter)

// starting the serve and listening on port 3001.
app.listen(3001, () => console.log("Listening on port 3001!"))
