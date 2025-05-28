import {Schema, model} from "mongoose"

let collection = "movimientos"
let schema = Schema({
    banco: {type: Schema.Types.ObjectId, ref: 'bancos', require: false },
    date: {type: Date, require: true},
    name: {type: String, require: true},
    amount: {type: Number, require: true}
})

let Gastos = model(collection, schema)

export default Gastos