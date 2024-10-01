import express from 'express'
import { StatusCodes } from 'http-status-codes';
import { userController } from '~/controllers/userController';
const Router = express.Router();

Router.get('/login', (req, res) => {
    userController.Login(req)
    // res.send("ok getboard sss ")
})
//  created board validation and controller
Router.post('/register', userController.CreatedUser)

export default Router
// export  const Board_router =router;