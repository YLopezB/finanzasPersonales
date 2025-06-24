import Usuario from "../../models/Usuario.js"

let signIn = async (req, res, next) => {
    try {
        await Usuario.findOneAndUpdate(
            {email: req.body.email},
            {online: true})
        return res.status(200).json({
            message: "Hola, gracias por volver "+ req.body.name,
            user: {
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                photo: req.body.photo,
                role: req.body.role,
                active: req.body.active,
                home: req.body.home
            },
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}

export default signIn