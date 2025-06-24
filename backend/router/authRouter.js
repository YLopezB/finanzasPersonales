import { Router } from "express"
import accountNotExist from "../middlewares/accountNotExist.js"
import validatePassword from "../middlewares/validatePassword.js"
import generateToken from "../middlewares/generateToken.js"
import signIn from "../controllers/auth/signIn.js"
import logOut from "../controllers/auth/logOut.js"
import accountActive from "../middlewares/accountActive.js"

const authRouter = Router()

authRouter.post("/signin", accountNotExist, accountActive, validatePassword, generateToken, signIn)
authRouter.get("/logout", logOut)

export default authRouter