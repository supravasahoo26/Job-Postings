import { Request, Response, RequestHandler } from "express";
import { getAllJobs, getJobById, createJob, updateJob, deleteJob } from "../models/jobModel";

export const getAllJobsController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobs = await getAllJobs();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
};

export const getJobByIdController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const job = await getJobById(Number(req.params.id));
    if (!job) {
      res.status(404).json({ error: "Job not found" });
      return; 
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job." });
  }
};

export const createJobController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await createJob(req.body);
    res.status(201).json({ id: result, ...req.body });
  } catch (error) {
    res.status(500).json({ error: "Failed to create job." });
  }
};

export const updateJobController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await updateJob(Number(req.params.id), req.body);
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Job not found" });
      return; 
    }
    res.status(200).json({ ...req.body });
  } catch (error) {
    res.status(500).json({ error: "Failed to update job." });
  }
};

export const deleteJobController: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await deleteJob(Number(req.params.id));
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Job not found" });
      return; 
    }
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: "Failed to delete job." });
  }
};
