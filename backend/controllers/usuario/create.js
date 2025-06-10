import Usuario from "../../models/Usuario.js"

const register = async (req, res, next) => {
    try {
        let user = await Usuario.create(req.body)
        return res.status(201).json({
            message: "Usuario creado con exito",
            user: {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                photo: user.photo,
                role: user.role,
                active: user.active
            }
        })
    } catch (error) {
        next(error)
    }
}

export default register 