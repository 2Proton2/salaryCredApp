import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "profession": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true
})

export const user = mongoose.model('User', userSchema);