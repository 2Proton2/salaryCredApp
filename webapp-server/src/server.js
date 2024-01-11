import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {mongoConnection} from './config/db.config.js';
import userRoute from './routes/user.route.js';
import salaryRoute from './routes/salary.route.js'
import { errorHandler, notFound } from './middleware/errorHandler.middleware.js';
dotenv.config({path: '.env'});
const PORT = process.env.PORT || 9000;

const app = express();

//Connecting to the database
mongoConnection();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/salary', salaryRoute);
app.use(notFound) //when not route url is matched
app.use(errorHandler); //errorHandler

let server = app.listen(PORT, () => {
    console.log(`Server listening at PORT [${PORT}]`);
});