import express from 'express'
import { StatusCodes } from 'http-status-codes';
import { boarController } from '~/controllers/boardController';
import { BoardValidation } from '~/validations/boardValidation';
const Router = express.Router();

Router.get('/getboard', (req, res) => {
    res.status(StatusCodes.OK).json({ message: "ok getboard sss" })
    // res.send("ok getboard sss ")
})
//  created board validation and controller
Router.post('/created', BoardValidation.CreatedNewBoard, boarController.CreatedNewBoardController)

export default Router
// export  const Board_router =router;