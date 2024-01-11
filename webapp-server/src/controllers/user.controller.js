import { createUserService, getAllUserService } from "../service/user.service.js";
import { genToken } from "../utils/genToken.js";
import { userExistence } from "../utils/userExistence.js";

export const createUserController = async (req, res, next) => {
    const data = req.body;

    const userOccurence = await userExistence(req.body.email);
    console.log('userOccurence controller =>',userOccurence);
    
    if(!userOccurence){
        const createData = await createUserService(data);

        //genToken and set the token
        genToken(res, createData._id);
        res.status(201).json({
            message: "employee registered successfully"
        });
    }
    else{
        res.status(500);
        throw new Error(`Employee Already Exist`);
        next();
    }
};

export const updateUserController = (req, res, next) => {

};

export const fetchAllUserController = async (req, res, next) => {
    const data = await getAllUserService();
    console.log(data);
    if(data){
        res.status(200).json({
            data,
            message: `Employees fetched successfully`
        })
    }
    else{
        res.status(500)
        throw new Error(`Something went wrong`);
    }
};