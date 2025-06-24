import Egreso from "../../models/Egreso.js";

let allOutflow = async (req, res, next) => {
    try {
        let all = await Egreso.find({ home: req.user.home })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allOutflow