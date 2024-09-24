import { StatusCodes } from "http-status-codes";
import { boarServices } from "~/services/boardServices";

const CreatedNewBoardController = async (req, res, next) => {
    try {

        const repon=await boarServices.CreatedNew(req.body)
        res.status(StatusCodes.OK).json(repon)

    } catch (error) {
        next(error)
    }
}
const GetDetailBoard=  async (req, res, next) => {
    try {
        const repon=await boarServices.GetDetailBoard(req.params.id)
        if(repon)
        {
            return res.status(StatusCodes.OK).json(repon)
        }
        res.status(StatusCodes.NOT_FOUND)

    } catch (error) {
        next(error)
    }
}
export const boarController = {
    CreatedNewBoardController,
    GetDetailBoard
}