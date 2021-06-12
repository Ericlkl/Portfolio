import { Router } from 'express';
import {
  createProject,
  getAllProjects,
  getProject
} from '../../controllers/projects';

const router = Router();

// Get all project
router.get('/', getAllProjects);

// get specific project
router.get('/:id', getProject);

// create project
router.post('/', createProject);

export default router;
