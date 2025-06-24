import {Schema, model} from "mongoose"

let collection = "movimientos"
let schema = Schema({
    account: {type: Schema.Types.ObjectId, ref: 'cuentas', require: false },
    date: {type: Date, require: true},
    name: {type: String, require: true},
    amount: {type: Number, require: true}, 
    typeMovement: {type: Schema.Types.ObjectId, ref: 'tipoMovimientos', require: true },
    reference: {type: Schema.Types.ObjectId, ref: 'ingresos', require: false },
    reference: {type: Schema.Types.ObjectId, ref: 'egresos', require: false },
    reference: {type: Schema.Types.ObjectId, ref: 'cuentas', require: false },
})

let Movimiento = model(collection, schema)

export default Movimiento