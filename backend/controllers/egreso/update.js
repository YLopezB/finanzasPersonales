import Egreso from "../../models/Egreso.js";

let updateOutflow = async (req, res, next) => {
    try {
        await Egreso.findByIdAndUpdate(
            req.body.id, {name: req.body.name} )
        return res.status(201).json({
            message: `El nombre de egreso ${req.body.name} fue actualizado con éxito ✅`
        })
    } catch (error) {
        next(error)
    }
}

export default updateOutflow