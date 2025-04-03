import express from 'express'
import { createOfficerVerification, listAllOfficers, loginUser, registerUser } from '../../controller/officerController.js';


const router=express.Router();

router.post('/officer/login',loginUser);
router.post('/officer/register',registerUser);


router.post('/officer-verification',createOfficerVerification);
router.get('/search-officers',listAllOfficers);


export default router;