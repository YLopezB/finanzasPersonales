import {Schema, model} from "mongoose"

let collection = "egresos"
let schema = Schema({
    name: {type: String, require: true},
    home: {type: Schema.Types.ObjectId, ref: 'hogares', require: true }
})

let Egreso = model(collection, schema)

export default Egreso