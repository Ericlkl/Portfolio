import { Router } from 'express';
import { createProject, getAllProjects } from '../controllers/projects';
const router = Router();

// Get all project
router.get('/', getAllProjects);

// // get specific project
// router.get('/:id');

// create project
router.post('/', createProject);

export default router;
