export default async (req, res, next) => {
    try {
        if(req.user.role == 1)
            next()
        else{
            res.status(403).json({
                message: `Ups❗${req.user.name} no tienes permiso para esta solicitud 🔐`
            })
        }
    } catch (error) {
        next(error)
    }
}