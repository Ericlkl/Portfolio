import { RequestHandler } from 'express';
import ProjectModel from '../models/Project';
import { Project } from '../types';

export const createProject: RequestHandler = async (req, res) => {
  try {
    const newProject = await new ProjectModel(req.body).save();
    res.json(newProject);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
};

export const getAllProjects: RequestHandler = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.json(projects);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
};
