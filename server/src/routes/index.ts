import { Application } from 'express';
import path from 'path';
import projectRouter from './projects';

export default (app: Application) => {
  app.use('/api/projects', projectRouter);

  // Serving Website
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../../../', 'client', 'build', 'index.html')
    )
  );
};
