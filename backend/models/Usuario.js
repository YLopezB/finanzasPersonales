import { Schema, model } from "mongoose"

let collection = "usuarios"
let schema = Schema({
    user: {type: String, require: true},
    password: {type: String, require: true},
    photo: {type: String, require: true}
})

let Usuario = model(schema, collection)

export default Usuario