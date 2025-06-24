import TipoCuenta from "../../models/TipoCuenta.js";

let updateAccountType = async (req, res, next) => {
    try {
        await TipoCuenta.findByIdAndUpdate(
            req.body.id, {name: req.body.name} )
        return res.status(201).json({
            message: `El nombre de tipo de cuenta ${req.body.name} fue actualizado con éxito ✅`
        })
    } catch (error) {
        next(error)
    }
}

export default updateAccountType