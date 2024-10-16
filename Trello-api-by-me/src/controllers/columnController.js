import { StatusCodes } from "http-status-codes";
import {columServices} from '~/services/cloumnServices'
const CreatedColumnController = async (req, res, next) => {
    try {

        const repon=await columServices.CreatedCloumn(req.body)
        res.status(StatusCodes.OK).json(repon)

    } catch (error) {
        next(error)
    }
}


export const columnController={
    CreatedColumnController,
}