import {Schema, model} from "mongoose"

let collection = "metas"
let schema = Schema({
    date: {type: Date, require: true},
    name: {type: String, require: true},
    amount: {type: Number, require: true}
})

let Metas = model(collection, schema)

export default Metas