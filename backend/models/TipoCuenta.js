import {Schema, model} from "mongoose"

let collection = "tipoCuentas"
let schema = Schema({
    name: {type: String, require: true},
})

let TipoCuenta = model(collection, schema)

export default TipoCuenta