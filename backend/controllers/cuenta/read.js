import Cuenta from "../../models/Cuenta.js"

let allAccount = async (req, res, next) => {
    try {
        let {name, accountType} = req.query 
        let query = {}
        query.home = req.user.home
        if(name) query.name = { $regex: name, $options: "i" }
        if(accountType) query.accountType = accountType
        let all = await Cuenta.find(query)
        console.log(query);
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allAccount