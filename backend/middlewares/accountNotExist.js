import Usuario from "../models/Usuario.js"

export default async (req, res, next) => {
    try {
        let account = await Usuario.findOne({email: req.body.email}).select('+password')
        if(account){
            req.body.name = account.name
            req.body.lastName = account.lastName
            req.body.role = account.role
            req.body.active = account.active
            req.body.home = account.home
            req.body.passwordBd = account.password
            return next()
        }
        return res.status(400).json({
            success: false,
            message: `$Tú correo ${req.body.email} no se encuentra registrado ❗📧`
        })
    } catch (error) {
        next(error)
    }
}