import express from'express'
const Router=express.Router();

Router.get('/getboard',(req,res)=>
{
    res.send("ok getboard ")
})

export default Router
// export  const Board_router =router;