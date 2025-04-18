import express from 'express'
import { createOfficerVerification, listAllOfficers, loginUser, registerUser, listOfficerComplaints } from '../../controller/officerController.js';


const router=express.Router();

router.post('/officer/login',loginUser);
router.post('/officer/register',registerUser);

router.get('/complaint-by-officer', listOfficerComplaints); // Assuming this function is defined in officerController.js


router.post('/officer-verification',createOfficerVerification);
router.get('/search-officers',listAllOfficers);


export default router;