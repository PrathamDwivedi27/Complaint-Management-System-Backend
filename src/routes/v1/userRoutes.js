import express from 'express'
import { deleteUser, getUser, loginUser, registerUser, updateUser } from '../../controller/userController.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';


const router=express.Router();

router.post('/user/login',loginUser);
router.post('/user/register',registerUser);
router.get('/user/:id',authMiddleware,getUser);
router.delete('/user/:id',authMiddleware,deleteUser);
router.patch('/user/:id',authMiddleware,updateUser);


export default router;