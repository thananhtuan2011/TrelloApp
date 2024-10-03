import { StatusCodes } from "http-status-codes";
import { jwtHelper } from "~/config/jwt";
import { userServices } from "~/services/userServices";
// Thời gian sống của token
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "3600000";
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "access-token-secret-example-tuanta.com-green-cat-a@";

// Thời gian sống của refreshToken
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "240hr";
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refresh-token-secret-example-tuandev-green-cat-a@";
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
        const repon=await userServices.Login_User(req.body)
        const accessToken = await jwtHelper.generateToken(repon, accessTokenSecret, accessTokenLife);
        const refreshToken = await jwtHelper.generaterefresh(repon, refreshTokenSecret, refreshTokenLife);
        console.log("accessToken",accessToken);
        console.log("refreshToken",refreshToken);
        if(repon&&accessToken&&refreshToken)
        {
            return res.status(StatusCodes.OK).json({
                accessToken:accessToken,
                refreshToken:refreshToken
            })
        }
       return res.status(StatusCodes.NOT_FOUND)

    } catch (error) {
         next(error)
    }
}
export const userController = {
    CreatedUser,
    Login
}