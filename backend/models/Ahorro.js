import { Schema, model } from "mongoose"

let collection = "ahorros"
let schema = Schema({
    date: {type: Date, require: true},
    name: {type: String, require: true},
    amount: {type: Number, require: true}
})

let Ahorro = model(collection, schema)

export default Ahorro