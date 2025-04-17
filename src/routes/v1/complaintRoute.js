import express from 'express'
import { createComplaint, deleteComplaint, getComplaintById, getComplaintByUser, updateComplaint, getComplaint, getComplaints, updateComplaintStatusByOfficer } from '../../controller/complaint-controller.js';
import upload from '../../middleware/image-upload.js';

const router=express.Router();

router.post('/complaint',upload.single("image"),createComplaint);
router.patch('/complaint/:id',updateComplaint);
router.get('/complaint/:id',getComplaintById);
router.get('/my-complaints',getComplaintByUser);
router.delete('/complaint/:id',deleteComplaint);
router.get('/complaints',getComplaint);
router.get('/filtered-complaints',getComplaints);
router.get('/complaintByStatus',getComplaints);    

router.patch('/complaint/:id/status',updateComplaintStatusByOfficer);



export default router;