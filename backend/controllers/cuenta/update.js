import Cuenta from "../../models/Cuenta.js";

let updateAccount = async (req, res, next) => {
    try {
        await Cuenta.findByIdAndUpdate(
        req.body.id, {name: req.body.name, accountType: req.body.accountType} )
        return res.status(201).json({
            success: true,
            message: `El nombre de cuenta ${req.body.name} fue actualizado con éxito ✅`
        })
    } catch (error) {
        next(error)
    }
}

export default updateAccount