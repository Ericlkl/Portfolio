import express, { RequestHandler } from 'express';
import path from 'path';

export const staticAssetsMiddleware = express.static(
  path.resolve(__dirname, '../../../', 'client', 'build')
);
