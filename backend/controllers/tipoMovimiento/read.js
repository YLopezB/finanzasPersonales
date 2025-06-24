import TipoMovimeinto from "../../models/TipoMovimiento.js";

let allTypeMovement = async (req, res, next) => {
    try {
        let all = await TipoMovimeinto.find({ home: req.user.home })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allTypeMovement