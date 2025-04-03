import express from 'express'
import { approveComplaint } from '../../controller/admin-controller.js';


const router=express.Router();

router.post('/approve-complaint/:id',approveComplaint);


export default router;