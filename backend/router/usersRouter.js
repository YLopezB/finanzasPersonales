import { Router } from "express"
import register from "../controllers/usuario/create.js"
import accountExists from "../middlewares/accountExists.js"
import createHash from "../middlewares/createHash.js"
import generateToken from "../middlewares/generateToken.js"

const usersRouter = Router()

usersRouter.post("/create", accountExists, createHash, generateToken, register)


export default usersRouter