import Movimiento from "../../models/Movimiento.js"
import Cuenta from "../../models/Cuenta.js"

let register = async (req, res, next) => {
    let homeUser = req.user.home
    let {account, amount, inFlow, outFlow, toAccount} = req.body
    try {
        if(inFlow){
            
        }
        /*let account = await Cuenta.find({name: req.body.account, home: homeUser})
        if(account.amount < req.body.amount)
            return res.status(200).json({message: `${req.user.name} no tienes saldo insuficiente, el saldo en tu cuenta ${account.name} es 💰 $${account.amount}`})
        */
    } catch (error) {
        next(error)
    }
}

export default register