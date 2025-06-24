import TipoMovimeinto from "../../models/TipoMovimiento.js";

let createTypeMovement = async (req, res, next) => {
    try {
        req.body.home = req.user.home
        await TipoMovimeinto.create(req.body)
        return res.status(201).json({
            success: true,
            message: `Tipo de movimiento ${req.body.name} creado con éxito ✅`
        })
    } catch (error) {
        next(error)
    }
}

export default createTypeMovement