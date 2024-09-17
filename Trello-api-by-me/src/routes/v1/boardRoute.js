import express from'express'
const router=express.Router();

router.get('/getboard',(req,res)=>
{
    res.send("ok getboard ")
})

export default router
// export  const Board_router =router;