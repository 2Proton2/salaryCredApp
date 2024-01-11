import mongoose from 'mongoose';

const salarySchema = new mongoose.Schema({
    salary: {
        type: Number,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
});

const salaryCollection = mongoose.model('Salary', salarySchema);