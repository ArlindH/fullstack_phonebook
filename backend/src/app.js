import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Controller import
import PeopleController from './controllers/PeopleController';


const app = express()
app.use(bodyParser.json({ limit: "100mb" }));
app.use(cors());

// Use controllers
app.use('/', PeopleController);

// MongoDB Connection
const connectWithRetry = () => {
  mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
      console.error('[Mongoose] Could not connect to mongo! Trying in 5 seconds');
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('[Mongoose] Connected to mongoose.');
    }
  });
}
connectWithRetry();

// Start the server
app.listen(8080, () => {
  console.log(`[Express] Backend started. Env: ${process.env.NODE_ENV}`);
});

