import { Schema, model } from "mongoose"

let collection = "usuarios"
let schema = Schema({
    name: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    photo: {type: String, require: true},
    role: {type: Number, default: 0},
    active: {type: Boolean, default: true},
    online: {type: Boolean, default: false}
})

let Usuario = model(collection, schema)

export default Usuario