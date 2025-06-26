import { Router } from "express"
import passport from "../middlewares/passport.js"
import register from "../controllers/movimiento/create.js"

let movementRouter = Router()

movementRouter.post("/create", passport.authenticate("jwt", {session: false}), register)

export default movementRouter