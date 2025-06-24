import {Schema, model} from "mongoose"

let collection = "tipoCuentas"
let schema = Schema({
    name: {type: String, require: true},
    home: {type: Schema.Types.ObjectId, ref: 'hogares', require: true}
})

let TipoCuenta = model(collection, schema)

export default TipoCuenta