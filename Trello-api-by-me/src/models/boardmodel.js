import { ObjectId } from "mongodb"
import { GET_DB } from "~/config/mongodb"

const Joi = require("joi")
const BOARD_COLLECTION_NAME = 'boards'

const BOARD_COLLECTION_SCHEMA = Joi.object({
    title: Joi.string().required(),
    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updateAt: Joi.date().timestamp('javascript').default(null)
})
const validateCreated = async (data) => {
    return await BOARD_COLLECTION_SCHEMA.validateAsync(data);
}
const CreatedNew = async (payload) => {
    try {
        const validadata = await validateCreated(payload)
        const result = await GET_DB().collection(BOARD_MODEL.BOARD_COLLECTION_NAME).insertOne(validadata)
        return result;
    }
    catch (error) {
        throw error
    }
}
const GetDetailBoard = async (id) => {

    const result = await GET_DB().collection(BOARD_MODEL.BOARD_COLLECTION_NAME).findOne({
        _id: new ObjectId(id)
    })
    return result;
}
const GetAllBoard = async () => {

    const result = await GET_DB().collection(BOARD_COLLECTION_NAME).find().toArray()
    return result;
}

const GetAllCloumnInBoard = async (id) => {

    const result = await GET_DB().collection(BOARD_COLLECTION_NAME).aggregate([
        {
            $match:{
                _id: new ObjectId(id)
            }
        },
        {
           
            $lookup: {

                from: "columns",
                localField: "_id",
                foreignField: "boardId",
                as: "CloumnInBoard"
            }
        }
    ]).toArray()
    if(result.length>0)
    {
        return result[0];
    }
    return null
   
}



export const BOARD_MODEL = {
    BOARD_COLLECTION_NAME,
    BOARD_COLLECTION_SCHEMA,
    CreatedNew,
    GetAllBoard,
    GetDetailBoard,
    GetAllCloumnInBoard
}