const { COULMN_MODEL } = require("~/models/columnModel")


const CreatedCloumn=async (patload)=>
{
    const result=await COULMN_MODEL.CreatedNewColumn(patload)
    return result;
}

 export const columServices={
    CreatedCloumn,
}