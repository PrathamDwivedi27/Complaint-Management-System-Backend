import express from 'express'
import { createComplaint, deleteComplaint, getComplaintById, getComplaintByUser, updateComplaint, getComplaint, getComplaints } from '../../controller/complaint-controller.js';


const router=express.Router();

router.post('/complaint',createComplaint);
router.patch('/complaint/:id',updateComplaint);
router.get('/complaint/:id',getComplaintById);
router.get('/my-complaints',getComplaintByUser);
router.delete('/complaint/:id',deleteComplaint);
router.get('/complaints',getComplaint);
router.get('/filtered-complaints',getComplaints);



export default router;