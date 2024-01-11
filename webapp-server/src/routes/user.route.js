import express from 'express';
import * as userControl from '../controllers/user.controller.js';
import { asyncHandler } from '../middleware/asyncHandler.middleware.js';
const Router = express.Router();

Router.get('/', asyncHandler(userControl.fetchAllUserController));
Router.post('/create', asyncHandler(userControl.createUserController));
Router.put('/update/:id', asyncHandler(userControl.updateUserController));

export default Router;