import { ObjectId } from "mongodb"
import { GET_DB } from "~/config/mongodb"

const Joi = require("joi")
const COLUMN_COLLECTION_NAME = 'columns'

const COLUMN_COLLECTION_SCHEMA = Joi.object({
    title: Joi.string().required(),
    boardId: Joi.string().required(),
    cardOrderIds:Joi.array(),
    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updateAt: Joi.date().timestamp('javascript').default(null)
}).unknown(true)
const validateCreated= async(data)=>
{
    
    return await COLUMN_COLLECTION_SCHEMA.validateAsync(data);
}
const CreatedNewColumn = async (payload) => {
    try {
        const validadata= await validateCreated(payload)
        validadata.boardId=new ObjectId(validadata.boardId)
        const result = await GET_DB().collection(COLUMN_COLLECTION_NAME).insertOne(validadata)
        return result;
    }
    catch(error)
    {
        throw error
    }
}
// const GetAllCloumn = async () => {
//     try {
//         const result = await GET_DB().collection(COLUMN_COLLECTION_NAME).aggregate([
//             {
//                 $lookup:
//                 {
//                   from: "broads",
//                   localField: "item",
//                   foreignField: "boardId",
//                   as: "inventory_docs"
//                 }
//             }
//         ])
//         return result;
//     }
//     catch(error)
//     {
//         throw error
//     }
// }

export const COULMN_MODEL={
    CreatedNewColumn,
    // GetAllCloumn
}