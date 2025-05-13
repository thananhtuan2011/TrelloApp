import express from 'express'
import Boardrouter from '~/routes/v1/boardRoute';
import Userrouter from '~/routes/v1/userRoute';
import Columrouter from '~/routes/v1/cloumnRouter';
const Router = express.Router()

Router.use('/boards', Boardrouter)
Router.use('/user', Userrouter)
Router.use('/column', Columrouter)
export default Router
