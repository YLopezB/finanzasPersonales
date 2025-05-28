import {Schema, model} from "mongoose"

let collection = "gastos"
let schema = Schema({
    date: {type: Date, require: true},
    name: {type: String, require: true},
    amount: {type: Number, require: true}
})

let Gastos = model(collection, schema)

export default Gastos