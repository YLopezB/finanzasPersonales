import TipoCuenta from "../../models/TipoCuenta.js";

let allAccountType = async (req, res, next) => {
    try {
        let all = await TipoCuenta.find({ home: req.user.home })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allAccountType