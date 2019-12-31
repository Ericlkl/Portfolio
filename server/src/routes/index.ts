import { Application } from 'express';
import path from 'path';
import projectRouter from './api/projects';
import jobsRouter from './api/jobs';

export default (app: Application) => {
  app.use('/api/projects', projectRouter);
  app.use('/api/jobs', jobsRouter);
  // Serving Website
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../../../', 'client', 'build', 'index.html')
    )
  );
};
