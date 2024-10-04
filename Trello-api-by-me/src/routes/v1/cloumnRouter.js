import express from 'express'
import { StatusCodes } from 'http-status-codes';
import { columnController } from '~/controllers/columnController';
const Router = express.Router();

Router.get('/getboard', (req, res) => {
    res.status(StatusCodes.OK).json({ message: "ok getboard sss" })
})
//  created board validation and controller
Router.post('/createdColumn', columnController.CreatedColumnController)

export default Router