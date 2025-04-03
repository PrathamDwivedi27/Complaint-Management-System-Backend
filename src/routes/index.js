import { Router } from "express";
import userRoutes from "./v1/userRoutes.js";
import officerRoutes from "./v1/officerRoute.js";

const router= Router();

router.use("/v1",userRoutes);
router.use("/v1",officerRoutes);


export default router;
