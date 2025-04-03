import express from 'express'
import { approveComplaint, rejectComplaint } from '../../controller/admin-controller.js';


const router=express.Router();

router.post('/approve-complaint/:id',approveComplaint);
router.post('/reject-complaint/:id',rejectComplaint);

export default router;