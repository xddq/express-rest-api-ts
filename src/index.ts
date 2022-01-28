import express from "express"
import todosRouter from "./routes/todos"
import authenticate from "./middleware/checkAuthenticated"

// creates an express app.
const app = express()

// NOTE(pierre): the order of app.use actually does matter. It is fifo applied
// to our app.


// this will run the authenticated middleware on every route!
app.use(authenticate)

// adds json middleware to express. enables us to get json data from the
// request. Parses request to json.
app.use(express.json())

// app.use("", todosRouter)
app.use("/todos", todosRouter)

// starting the serve and listening on port 3001.
app.listen(3001, () => console.log("Listening on port 3001!"))
