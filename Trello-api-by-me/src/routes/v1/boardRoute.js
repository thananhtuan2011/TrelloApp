import express from 'express'
import { StatusCodes } from 'http-status-codes';
import { boarController } from '~/controllers/boardController';
import { BoardValidation } from '~/validations/boardValidation';
const router = express.Router();

router.get('/getboard', (req, res) => {
    res.status(StatusCodes.OK).json({ message: "ok getboard sss" })
    // res.send("ok getboard sss ")
})
//  created board validation and controller
router.post('/created', BoardValidation.CreatedNewBoard, boarController.CreatedNewBoardController)

export default Router
// export  const Board_router =router;