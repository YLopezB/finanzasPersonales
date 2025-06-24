import {Schema, model} from "mongoose"

let collection = "tipoMovimientos"
let schema = Schema({
    name: {type: String, require: true},
    home: {type: Schema.Types.ObjectId, ref: 'hogares', require: true }
})

let TipoMovimeinto = model(collection, schema)

export default TipoMovimeinto