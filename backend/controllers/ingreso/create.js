import Ingreso from "../../models/Ingreso.js";

let createInflow = async (req, res, next) => {
    try {
        req.body.home = req.user.home
        let createInflow = await Ingreso.create(req.body)
        return res.status(201).json({
            success: true,
            message: `Tú cuenta de ingreso ${req.body.name} fue creada con éxito ✅`
        })
    } catch (error) {
        next(error)
    }
} 

export default createInflow