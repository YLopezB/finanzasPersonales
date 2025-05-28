import mongoose from "mongoose"

async function dataBase() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Base de datos conectada");
    } catch (error) {
        console.log("Error: ", error);
    }
}

dataBase()