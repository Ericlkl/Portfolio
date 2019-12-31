import express, { Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { staticAssetsMiddleware, websiteRouterMiddleware } from './middlewares';
import routers from './routes';

const app = express();
const mongoURI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds155461.mlab.com:55461/eric_lee_portfolio`;

// Serving Static Assets from client folder
app.use(staticAssetsMiddleware);

mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
  console.log('Connected MLab Successfully')
);

routers(app);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
