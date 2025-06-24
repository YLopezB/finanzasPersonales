import { Router } from "express"
import passport from "../middlewares/passport.js"
import createAccountType from "../controllers/tipoCuenta/create.js"
import updateAccountType from "../controllers/tipoCuenta/update.js"
import allAccountType from "../controllers/tipoCuenta/read.js"

let accountType = Router()

accountType.post("/create", passport.authenticate("jwt", {session: false}), createAccountType)
accountType.put("/update", passport.authenticate("jwt", {session: false}), updateAccountType)
accountType.get("/read", passport.authenticate("jwt", {session: false}), allAccountType)

export default accountType