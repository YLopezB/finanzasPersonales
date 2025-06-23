export default async (req, res, next) => {
    try {
        if(req.user.role == 1)
            next()
        else{
            res.status(403).json({
                message: "El usuario no tiene permiso para esta solicitud"
            })
        }
    } catch (error) {
        next(error)
    }
}