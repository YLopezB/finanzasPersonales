import Cuenta from "../../models/Cuenta.js";

let createAccount = async (req, res, next) => {
    try {
        req.body.home = req.user.home
        let create = await Cuenta.create(req.body)
        return res.status(201).json({
            success: true,
            message: `Cuenta ${create.name} fue creada con éxito ✅`
        })
    } catch (error) {
        next(error)
    }
}

export default createAccount