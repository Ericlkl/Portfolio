import { Router } from 'express';
import { createJobReq } from '../../controllers/jobs';
const router = Router();

// Create new job
router.post('/', createJobReq);

export default router;
