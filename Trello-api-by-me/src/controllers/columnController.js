import { StatusCodes } from "http-status-codes";
import { boarServices } from "~/services/boardServices";

const CreatedColumnController = async (req, res, next) => {
    try {

        const repon=await boarServices.CreatedNew(req.body)
        res.status(StatusCodes.OK).json(repon)

    } catch (error) {
        next(error)
    }
}
export const columnController={
    CreatedColumnController
}