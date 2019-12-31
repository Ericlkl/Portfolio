import dotenv from 'dotenv';
import express from 'express';
import { staticAssetsMiddleware } from './middlewares';
import routers from './routes';
import connectDB from './config/db';

dotenv.config();

const app = express();
app.use(express.json());
// Serving Static Assets from client folder
app.use(staticAssetsMiddleware);

connectDB();
routers(app);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
