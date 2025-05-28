import {Schema, model} from "mongoose"

let collection = "bolsillos"
let schema = Schema({
    date: {type: Date, require: true},
    name: {type: String, require: true},
    amount: {type: Number, require: true}
})

let Bolsillo = model(collection, schema)

export default Bolsillo