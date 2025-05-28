import { Schema, model } from "mongoose"

let collection = "bancos"
let schema = Schema({
    date: {type: Date, require: true},
    name: {type: String, require: true},
    amount: {type: Number, require: true}
})

let Banco = model(collection, schema)

export default Banco