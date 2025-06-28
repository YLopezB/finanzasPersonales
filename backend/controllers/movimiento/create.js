import Cuenta from "../../models/Cuenta.js"
import Movimiento from "../../models/Movimiento.js"

let register = async (req, res, next) => {
    let { account, amount, details, inFlow, outFlow, toAccount } = req.body
    let homeUser = req.user.home

    try {
        let accountBd = await findAmount(account)
        let newAmount = accountBd.amount
        let typeMovement = ""

        if (inFlow) {
            typeMovement = "ingreso"
            await updateAmount(account, amount)
        } else if (outFlow) {
            if (!hasEnoughBalance(newAmount, amount))
                return res.status(400).json({ message: `Saldo insuficiente en cuenta ${accountBd.name}` })
            typeMovement = "egreso"
            await updateAmount(account, -amount)
        } else if (toAccount) {
            let toAccountBd = await findAmount(toAccount)
            if (!toAccountBd) return res.status(404).json({ message: "Cuenta destino no encontrada" })
            if (!hasEnoughBalance(newAmount, amount))
                return res.status(400).json({ message: `Saldo insuficiente en cuenta ${accountBd.name}` })
            typeMovement = "transferencia"
            await updateAmount(account, -amount)
            await updateAmount(toAccount, amount)
            await createMovement({
                home: homeUser,
                account: account,
                toAccount: toAccount,
                details,
                amount,
                typeMovement
            })
            return res.status(201).json({ message: `Transferiste ${formatMoney(amount)} de ${accountBd.name} a ${toAccountBd.name}` })
        }
        await createMovement({
            home: homeUser,
            account: account,
            details,
            amount,
            typeMovement,
            inFlow,
            outFlow
        })
        return res.status(201).json({ message: `Movimiento ${typeMovement} de ${formatMoney(amount)} realizado en cuenta ${accountBd.name}` })
    } catch (error) {
        next(error)
    }
}

let updateAmount = async (id, amount) => Cuenta.findByIdAndUpdate(id, { $inc: { amount } })
let findAmount = async (id) => id ? Cuenta.findById(id) : null
let createMovement = async (data) => Movimiento.create(data)
let hasEnoughBalance = (balance, amount) => balance >= amount
let formatMoney = (value) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value)

export default register