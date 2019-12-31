import express, { RequestHandler } from 'express';
import path from 'path';

export const staticAssetsMiddleware = express.static(
  path.resolve(__dirname, '../../../', 'client', 'build')
);

export const websiteRouterMiddleware: RequestHandler = (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../../../', 'client', 'build', 'index.html')
  );
};
