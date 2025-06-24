import {Schema, model} from "mongoose"

let collection = "ingresos"
let schema = Schema({
    name: {type: String, require: true},
    home: {type: Schema.Types.ObjectId, ref: 'hogares', require: true }
})

let Ingreso = model(collection, schema)

export default Ingreso