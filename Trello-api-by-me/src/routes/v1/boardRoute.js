import express from'express'
const router=express.Router();

router.get('/getboard',(req,res)=>
{
    res.send("ok getboard sss")
})

export default router
// export  const Board_router =router;