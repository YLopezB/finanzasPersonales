import Egreso from "../../models/Egreso.js";

let createOutflow = async (req, res, next) => {
    try {
        console.log(req.user)
        req.body.home = req.user.home
        await Egreso.create(req.body)
        return res.status(201).json({
            success: true,
            message: `Tú cuenta de egreso ${req.body.name} fue creada con éxito ✅`
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
} 

export default createOutflow