import Usuario from "../../models/Usuario.js";

let update = async (req, res, next) => {
    try {
        let updateUser = await Usuario.updateOne(
        { email: req.user.email },
        {
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo,
            role: req.body.role,
        })
        return res.status(201).json({updateUser})
    } catch (error) {
        next(error);
    }
};

export default update
