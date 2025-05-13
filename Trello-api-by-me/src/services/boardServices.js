import { GET_DB } from "~/config/mongodb"
import { BOARD_MODEL } from "~/models/boardmodel"


const CreatedNew=async (payload)=>
{
    try{
        const result=BOARD_MODEL.CreatedNew(payload);
        return result;
        // await GET_DB().collection(BOARD_MODEL.BOARD_COLLECTION_NAME)

    }
    catch(error)
    {
        throw error
    }

}

const GetDetailBoard=async (id)=>
    {
        try{
            const result=  BOARD_MODEL.GetDetailBoard(id);
            return result;
    
        }
        catch(error)
        {
            throw error
        }
    
    }
    const GetAllBoard=async (id)=>
        {
            try{
                const result=  BOARD_MODEL.GetAllBoard(id);
                return result;
        
            }
            catch(error)
            {
                throw error
            }
        
        }
        const GetAllCloumnInBoard=async (id)=>
            {
                try{
                    const result=  BOARD_MODEL.GetAllCloumnInBoard(id);
                    return result;
            
                }
                catch(error)
                {
                    throw error
                }
            
            }
        

export const boarServices={
    CreatedNew,
    GetAllBoard,
    GetAllCloumnInBoard,
    GetDetailBoard
}