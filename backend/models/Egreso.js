import {Schema, model} from "mongoose"

let collection = "egresos"
let schema = Schema({
    name: {type: String, require: true},
    nature: {type: Schema.Types.ObjectId, ref: 'tipoCuentas', require: false},
})

let Egreso = model(collection, schema)

export default Egreso