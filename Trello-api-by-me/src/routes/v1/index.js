import express from 'express'
import  Boardrouter from '~/routes/v1/boardRoute';
import Userrouter from '~/routes/v1/userRoute';

const Router = express.Router()

Router.use('/boards', Boardrouter)
Router.use('/user', Userrouter)
export default Router
