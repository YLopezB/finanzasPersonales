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
            role: req.body.role
        })
        return res.status(201).json({updateUser})
    } catch (error) {
        next(error);
    }
};

let updateuserHome = async (req, res, next) => {
    try {
        if(req.user.role ==1){
            let updateUser = await Usuario.updateOne(
            { email: req.body.email},
            {
                role: req.body.role,
                active: req.body.active
            })
            return res.status(201).json({updateUser}) 
        }
        return res.status(400).json({
            succes: false,
            message: `Ups❗${req.user.name} no cuentas con permiso para realizar este cambio 🫤`
        })
    } catch (error) {
        next(error)
    }
}

export {update, updateuserHome}
