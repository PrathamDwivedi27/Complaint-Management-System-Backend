import express from 'express'
import { deleteUser, getUser, loginUser, registerUser, updateUser } from '../../controller/userController.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';
import User from '../../model/userSchema.js';
import jwt from 'jsonwebtoken';
import Officer from '../../model/officerSchema.js';


const router=express.Router();

router.post('/user/login',loginUser);
router.post('/user/register',registerUser);

router.get('/user/get-user-by-token', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 
    console.log(token);

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    
    console.log("the userId is ", userId);
    
    const user = await User.findById(userId).select('-password');

    console.log("the user is ", user);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
});


router.get('/get-officer-by-token', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 
    console.log(token);

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const officerId = decoded.id;
    
    console.log("the officerId is ", officerId);
    
    const user = await Officer.findById(officerId).select('-password').populate('assignedTasks');

    console.log("the officer is ", user);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/user/:id',authMiddleware,getUser);
router.delete('/user/:id',authMiddleware,deleteUser);
router.patch('/user/update',authMiddleware,updateUser);



export default router;