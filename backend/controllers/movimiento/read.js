import Movimiento from "../../models/Movimiento.js";

let allMovement = async (req, res, next) => {
    try {
        let {account, startDate, endDate, details, amount, typeMovement, inFlow, outFlow, toAccount, } = req.query;
        let query = [];
        query.push({ home: req.user.home });
        if (account) query.push({ account });
        if (typeMovement) query.push({ typeMovement });
        if (inFlow) query.push({ inFlow });
        if (outFlow) query.push({ outFlow });
        if (toAccount) query.push({ toAccount });
        if (details) query.push({ details: { $regex: details, $options: "i" } });
        if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (!isNaN(start) && !isNaN(end)) {
            query.push({ date: { $gte: start, $lt: end } });
        }
        }
        if (amount) {
        query.push({
            $expr: {
            $regexMatch: {
                input: { $toString: "$amount" },
                regex: amount,
                options: "i",
            },
            },
        });
        }

        let allMovement = await Movimiento.find({ $and: query })
        .populate("account", "name")
        .populate("inFlow", "name")
        .populate("outFlow", "name")
        .populate("toAccount", "name")
        .lean();

        return res.status(200).json({
        success: true,
        count: allMovement.length,
        response: allMovement,
        });
    } catch (error) {
        next(error);
    }
    };

    export default allMovement;
