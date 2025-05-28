import {Schema, model} from "mongoose"

let collection = "efectivo"
let schema = Schema({
    date: {type: Date, require: true},
    name: {type: String, require: true},
    amount: {type: Number, require: true}
})

let Efectivo = model(collection, schema)

export default Efectivo