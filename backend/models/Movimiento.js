import {Schema, model} from "mongoose"

let collection = "movimientos"
let schema = Schema({
    home: {type: Schema.Types.ObjectId, ref: 'hogares', require: true},
    account: {type: Schema.Types.ObjectId, ref: 'cuentas', require: true },
    date: {type: Date, require: true, default: Date.now},
    details: {type: String, require: true},
    amount: {type: Number, require: true}, 
    typeMovement: {type: String, require: true },
    inFlow: {type: Schema.Types.ObjectId, ref: 'ingresos', require: false },
    outFlow: {type: Schema.Types.ObjectId, ref: 'egresos', require: false },
    toAccount: {type: Schema.Types.ObjectId, ref: 'cuentas', require: false },
})

let Movimiento = model(collection, schema)

export default Movimiento