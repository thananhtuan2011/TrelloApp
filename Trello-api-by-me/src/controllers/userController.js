import { StatusCodes } from "http-status-codes";
import { userServices } from "~/services/userServices";

const CreatedUser = async (req, res, next) => {
    try {

        const repon=await userServices.CreatedUser(req.body)
        res.status(StatusCodes.OK).json(repon)

    } catch (error) {
        next(error)
    }
}
const Login=  async (req, res, next) => {
    try {
        console.log("req",req.body);
        const repon=await userServices.Login_User(req.body)
        console.log("repon",repon);
        
        if(repon)
        {
            return res.status(StatusCodes.OK).json(repon)
        }
        res.status(StatusCodes.NOT_FOUND)

    } catch (error) {
         next(error)
    }
}
export const userController = {
    CreatedUser,
    Login
}