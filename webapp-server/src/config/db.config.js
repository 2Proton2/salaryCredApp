import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: '.env'});
const url = process.env.MONGO_DB_URL


export const mongoConnection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/salary_cred');
        console.log('Handshake with database done successfully!')       
    } catch (error) {
        console.log(error);
    }
}