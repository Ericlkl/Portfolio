import { RequestHandler } from 'express';
import JobModel from '../models/Job';

export const createJobReq: RequestHandler = async (req, res) => {
  try {
    const newJob = await new JobModel(req.body).save();
    res.json(newJob);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
};
