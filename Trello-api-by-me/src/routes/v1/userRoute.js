import express from 'express'
import { StatusCodes } from 'http-status-codes';
import { userController } from '~/controllers/userController';
const Router = express.Router();

Router.post('/login', userController.Login)

//  created board validation and controller
Router.post('/register', userController.CreatedUser)

export default Router
// export  const Board_router =router;