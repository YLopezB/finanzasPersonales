import { Router } from "express"
import accountExists from "../middlewares/accountExists.js"
import createHash from "../middlewares/createHash.js"
import home from "../middlewares/home.js"
import generateToken from "../middlewares/generateToken.js"
import passport from "../middlewares/passport.js"
import register from "../controllers/usuario/create.js"
import authRole from "../middlewares/authRole.js"
import {allUsers, validateToken} from "../controllers/usuario/read.js"
import {update, updateuserHome} from "../controllers/usuario/update.js"

const usersRouter = Router()

usersRouter.post("/create", accountExists, createHash, home, generateToken, register)
usersRouter.get("/read", passport.authenticate("jwt", {session: false}), authRole, allUsers)
usersRouter.get("/validateToken", passport.authenticate("jwt", {session: false}), validateToken)
usersRouter.put("/update", passport.authenticate("jwt", {session: false}), createHash, update)
usersRouter.put("/updateuserhome", passport.authenticate("jwt", {session: false}), updateuserHome)




export default usersRouter