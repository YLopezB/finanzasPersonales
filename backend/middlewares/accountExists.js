import Usuario from "../models/Usuario.js"

export default async (req, res, next) => {
    try {
        let account = await Usuario.findOne({email: req.body.email})
        if(account){
            return res.status(400).json({
                message: `El correo ${account.email} ya esta registrado 📧`
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}