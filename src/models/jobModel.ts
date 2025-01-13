import { OkPacket, RowDataPacket } from "mysql2";
import pool from "../config/db";

// Define Job interface
export interface Job {
  id?: number;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
}

export const getAllJobs = async (): Promise<Job[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>("SELECT * FROM jobs");
  return rows as Job[];
};

export const getJobById = async (id: number): Promise<Job | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>("SELECT * FROM jobs WHERE id = ?", [id]);
  return rows[0] ? (rows[0] as Job) : null;
};

export const createJob = async (job: Job): Promise<number> => {
  const [result] = await pool.execute<OkPacket>(
    "INSERT INTO jobs (title, company, location, salary, description) VALUES (?, ?, ?, ?, ?)",
    [job.title, job.company, job.location, job.salary, job.description]
  );
  return result.insertId;
};

export const updateJob = async (id: number, job: Job): Promise<OkPacket> => {
  const [result] = await pool.execute<OkPacket>(
    "UPDATE jobs SET title = ?, company = ?, location = ?, salary = ?, description = ? WHERE id = ?",
    [job.title, job.company, job.location, job.salary, job.description, id]
  );
  return result;
};

export const deleteJob = async (id: number): Promise<OkPacket> => {
  const [result] = await pool.execute<OkPacket>("DELETE FROM jobs WHERE id = ?", [id]);
  return result;
};
