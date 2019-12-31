import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Serving Static Assets from client folder
app.use(express.static(path.resolve(__dirname, '../../', 'client', 'build')));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../../', 'client', 'build'));
});

const PORT: number = 5000;

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
