import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import jobsRoutes from "./routes/jobs";

dotenv.config();

const app = express();

app.use(bodyParser.json());

// Routes
app.use("/jobs", jobsRoutes);

export default app;
