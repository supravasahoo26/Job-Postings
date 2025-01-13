import { Router, Request, Response } from "express";
import { 
  getAllJobsController, 
  getJobByIdController, 
  createJobController, 
  updateJobController, 
  deleteJobController 
} from "../controllers/jobController";

const router = Router();

router.get("/", getAllJobsController); 
router.get("/:id", getJobByIdController); 
router.post("/", createJobController); 
router.put("/:id", updateJobController); 
router.delete("/:id", deleteJobController); 

export default router;
