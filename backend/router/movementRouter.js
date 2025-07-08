import { Router } from "express"
import passport from "../middlewares/passport.js"
import register from "../controllers/movimiento/create.js"
import allMovement from "../controllers/movimiento/read.js"

let movementRouter = Router()

movementRouter.post("/create", passport.authenticate("jwt", {session: false}), register)
movementRouter.get("/read", passport.authenticate("jwt", {session: false}), allMovement)

export default movementRouter