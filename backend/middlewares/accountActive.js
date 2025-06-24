export default async (req, res, next) => {
    if(!req.body.active){
        return res.status(403).json({
            success: false,
            message: `Ups❗${req.body.name}, al parecer tu cuenta esta inactiva, comunicate con el administrador del hogar 🏡`
        })
    }
    next()
}
