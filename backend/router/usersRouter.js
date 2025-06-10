import { Router } from "express"
import accountExists from "../middlewares/accountExists.js"
import createHash from "../middlewares/createHash.js"
import passport from "../middlewares/passport.js"
import register from "../controllers/usuario/create.js"
import {allUsers, validateToken} from "../controllers/usuario/read.js"

const usersRouter = Router()

usersRouter.post("/create", accountExists, createHash, register)
usersRouter.get("/allUsers", passport.authenticate("jwt", {session: false}), allUsers)
usersRouter.get("/validateToken", passport.authenticate("jwt", {session: false}), validateToken)


export default usersRouter