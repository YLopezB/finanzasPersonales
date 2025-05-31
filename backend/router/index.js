import { Router } from "express"
import usersRouter from "./usersRouter.js"

let routerIndex = Router()
routerIndex.use("/users", usersRouter)

export default routerIndex