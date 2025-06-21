import Usuario from "../../models/Usuario.js"

const register = async (req, res, next) => {
    try {
        if(req.body.role == 1) req.body.online = true    
        let user = await Usuario.create(req.body)
        user = await Usuario.findById(user._id).populate("home", "name")
        return res.status(201).json({
            message: "Usuario creado con exito",
            user: {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                photo: user.photo,
                role: user.role,
                active: user.active,
                home: user.home
            },
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}

export default register 