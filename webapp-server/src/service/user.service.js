import { user } from '../model/user.model.js';

export const createUserService = async (ctxt) => {
    console.log('getting the values of users : => ', ctxt);
    const data = await user.create(ctxt);
    return data;
}

export const getAllUserService = async (ctxt) => {
    const data = await user.find({});
    return data;
}