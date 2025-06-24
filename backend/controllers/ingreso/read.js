import Ingreso from "../../models/Ingreso.js";

let allInflow = async (req, res, next) => {
    try {
        let all = await Ingreso.find({ home: req.user.home })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allInflow