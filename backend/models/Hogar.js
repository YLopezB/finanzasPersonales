import { Schema, model } from "mongoose"

let collection = "hogares"
let schema = Schema({
    name: {type: String, require: true}
})

let Hogar = model(collection, schema)

export default Hogar