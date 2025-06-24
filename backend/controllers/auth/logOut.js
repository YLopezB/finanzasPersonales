import Usuario from "../../models/Usuario.js"

let logOut = async (req, res, next) => {
    try {
        await Usuario.findOneAndUpdate(
            {email: req.body.email},
            {online: false})
            return res.status(200).json({
                success: true,
                message: "Sesión finalizada, vuelve pronto"
            })
    } catch (error) {
        next(error)
    }
}

export default logOut