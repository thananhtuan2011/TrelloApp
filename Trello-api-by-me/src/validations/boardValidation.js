import Joi from "joi";

const { StatusCodes } = require("http-status-codes")

const CreatedNewBoard = async (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
    });
    try {
        await schema.validateAsync(req.body)
        next();


    } catch (error) {
        next(error);
    }
}
export const BoardValidation = {
    CreatedNewBoard
} 