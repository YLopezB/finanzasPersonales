import { Schema, model } from "mongoose"

let collection = "cuentas"
let schema = Schema({
    date: {type: Date, require: true, default: Date.now},
    name: {type: String, require: true},
    accountType: {type: Schema.Types.ObjectId, ref: 'tipoCuentas', require: false},
    amount: {type: Number, require: true, default: 0},
    home: {type: Schema.Types.ObjectId, ref: 'hogares', require: true}
})

let Cuenta = model(collection, schema)

export default Cuenta