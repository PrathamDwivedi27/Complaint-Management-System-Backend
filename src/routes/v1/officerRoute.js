import express from 'express'
import { createOfficerVerification, loginUser, registerUser } from '../../controller/officerController.js';


const router=express.Router();

router.post('/officer/login',loginUser);
router.post('/officer/register',registerUser);


router.post('/officer-verification',createOfficerVerification);


export default router;