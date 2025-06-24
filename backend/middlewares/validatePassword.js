import bcryptjs from "bcryptjs"

export default (req, res, next) => {
    try {
        let passwordBody = req.body.password
        let passwordBd = req.body.passwordBd
        let compare = bcryptjs.compareSync(passwordBody, passwordBd)
        if(compare)
            return next()
        return res.status(400).json({
            success: false,
            message: `🛑 ${req.body.name} la contraseña que ingresaste no es correcta 🔒`
        })
    } catch (error) {
        next(error)
    }
}