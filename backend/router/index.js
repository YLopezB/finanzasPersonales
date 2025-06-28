import { Router } from "express"
import usersRouter from "./usersRouter.js"
import authRouter from "./authRouter.js"
import account from "./accountRouter.js"
import accountTypeRouter from "./accountTypeRouter.js"
import outFlowRouter from "./outFlowRouter.js"
import inFlowRouter from "./inFlowRouter.js"
import typeMovement from "./typeMovement.js"
import movementRouter from "./movementRouter.js"

let routerIndex = Router()

routerIndex.use("/users", usersRouter)
routerIndex.use("/auth", authRouter)
routerIndex.use("/account", account)
routerIndex.use("/accountType", accountTypeRouter)
routerIndex.use("/outFlow", outFlowRouter)
routerIndex.use("/inFlow", inFlowRouter)
routerIndex.use("/typeMovement", typeMovement)
routerIndex.use("/movement", movementRouter)


export default routerIndex