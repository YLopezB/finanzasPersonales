import express from "express"
import 'dotenv/config.js'
import './config/dataBase.js'
import cors from "cors"
import morgan from "morgan"
import routerIndex from "./router/index.js"

const server = express()
const PORT = process.env.PORT || 8080

const ready = () => console.log(`servidor corriendo en el puerto ${PORT}`);

server.use(express.urlencoded({ extended: true}))
server.use(express.json())
server.use(cors())
server.use(morgan("dev"))

server.use('/api', routerIndex)

server.listen(PORT, ready)

