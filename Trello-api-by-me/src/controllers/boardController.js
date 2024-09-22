import { StatusCodes } from "http-status-codes";

const CreatedNewBoardController = async (req, res, next) => {
    try {

        // throw new Error("test")
        res.status(StatusCodes.OK).json({ message: " controllter ok getboard sss" })

    } catch (error) {
        next(error)
    }
}
export const boarController = {
    CreatedNewBoardController
}