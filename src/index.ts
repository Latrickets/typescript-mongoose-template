import express from 'express';
import mongoose from 'mongoose';
import {config} from './config/config';
import UserRoutes from './routes/User';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose
  .connect(config.mongo.url, {retryWrites: true, w: 'majority'})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error connecting to MongoDB', error.message);
  });

app.get('/test', (_req, res) => {
  console.log('test');
  res.send('Hello World');
});

app.use('/user', UserRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
