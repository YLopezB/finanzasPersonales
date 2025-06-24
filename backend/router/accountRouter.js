import { Router } from "express"
import passport from "../middlewares/passport.js"
import allAccount from "../controllers/cuenta/read.js"
import createAccount from "../controllers/cuenta/create.js"
import updateAccount from "../controllers/cuenta/update.js"

const accountRouter = Router()

accountRouter.post("/create", passport.authenticate("jwt", {session: false}), createAccount)
accountRouter.get("/read", passport.authenticate("jwt", {session: false}), allAccount)
accountRouter.put("/update", passport.authenticate("jwt", {session: false}), updateAccount)

export default accountRouter