import TipoCuenta from "../../models/TipoCuenta.js"

let createAccountType = async (req, res, next) => {
    try {
        req.body.home = req.user.home
        let create = TipoCuenta.create(req.body)
        return res.status(201).json({
            success: true,
            message: `Tipo de cuenta ${req.body.name} fue creada con éxito ✅`
        })
    } catch (error) {
        next(error)
    }
}

export default createAccountType