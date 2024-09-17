import express from 'express'
import  Boardrouter from '~/routes/v1/boardRoute';

const Router = express.Router()

Router.use('/boards', Boardrouter)

export default Router
