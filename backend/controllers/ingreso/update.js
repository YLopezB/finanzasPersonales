import Ingreso from "../../models/Ingreso.js";

let updateInflow = async (req, res, next) => {
    try {
        await Ingreso.findByIdAndUpdate(
            req.body.id, {name: req.body.name} )
        return res.status(201).json({
            message: `El nombre ingreso ${req.body.name} fue actualizado con éxito ✅`
        })
    } catch (error) {
        next(error)
    }
}

export default updateInflow