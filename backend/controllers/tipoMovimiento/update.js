import TipoMovimeinto from "../../models/TipoMovimiento.js";

let updateTypeMovement = async (req, res, next) => {
    try {
        await TipoMovimeinto.findByIdAndUpdate(
            req.body.id, {name: req.body.name} )
        return res.status(201).json({
            message: `El nombre de tipo de movimiento ${req.body.name} fue actualizado con éxito ✅`
        })
    } catch (error) {
        next(error)
    }
}

export default updateTypeMovement