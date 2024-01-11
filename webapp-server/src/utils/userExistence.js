import { user } from "../model/user.model.js"

export const userExistence = async (email) => {
    const data = await user.find({email});
    const flag = (data && (data.length !== 0)) ? true : false;
    return flag;
}