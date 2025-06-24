import { Router } from "express";
import createOutFlow from "../controllers/egreso/create.js"
import allOutflow from "../controllers/egreso/read.js"
import updateOutflow from "../controllers/egreso/update.js"
import passport from "../middlewares/passport.js";

let outFlowRouter = Router()

outFlowRouter.get("/read", passport.authenticate("jwt", {session: false}), allOutflow)
outFlowRouter.post("/create", passport.authenticate("jwt", {session: false}),createOutFlow)
outFlowRouter.put("/update", passport.authenticate("jwt", {session: false}), updateOutflow)

export default outFlowRouter