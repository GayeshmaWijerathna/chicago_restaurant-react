
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

const MONGODB_URL =process.env.MONGODB_URL;

const db =async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URL)
        console.info(`MongoDB Connected to: ${conn.connection.host}`)
    } catch (error) {
        console.error("Mongo DB Connect Error", error)
    }
}

module.exports=db;
