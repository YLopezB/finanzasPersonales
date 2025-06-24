import { Router } from "express";
import allInflow from "../controllers/ingreso/read.js";
import createInflow from "../controllers/ingreso/create.js";
import updateInflow from "../controllers/ingreso/update.js";
import passport from "../middlewares/passport.js";

let inFlowRouter = Router()

inFlowRouter.get("/read", passport.authenticate("jwt", {session: false}), allInflow)
inFlowRouter.put("/update", passport.authenticate("jwt", {session: false}), updateInflow)
inFlowRouter.post("/create", passport.authenticate("jwt", {session: false}), createInflow)

export default inFlowRouter