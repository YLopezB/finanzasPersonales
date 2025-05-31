import Usuario from "../../models/Usuario.js"

const register = async (req, res, next) => {
    try {
        let user = await Usuario.create(req.body)
        return res.status(201).json({
            token: req.token,
            message: "Usuario creado con exito",
            user: {
                name: user.name,
                photo: user.photo
            }
        })
    } catch (error) {
        next(error)
    }
}

export default register 