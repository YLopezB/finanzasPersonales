import { Router } from "express";
import createTypeMovement from "../controllers/tipoMovimiento/create.js"
import allTypeMovement from "../controllers/tipoMovimiento/read.js"
import updateTypeMovement from "../controllers/tipoMovimiento/update.js"
import passport from "../middlewares/passport.js";

let typeMovement = Router()

typeMovement.get("/read", passport.authenticate("jwt", {session: false}), allTypeMovement)
typeMovement.put("/update", passport.authenticate("jwt", {session: false}), updateTypeMovement)
typeMovement.post("/create", passport.authenticate("jwt", {session: false}), createTypeMovement)

export default typeMovement