import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import memoriesRoutes from './routes/memories.js';

const app = express();
dotenv.config();

//SETUP BodyParser - limit to control images size
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
//Routes need to be under cors config
app.use('/memories', memoriesRoutes);

app.use('/', (request, response) => {
  response.send('Hello to memories API')
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(ENV['CONNECTION_URL'], 
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => 
    app.listen(PORT, () => console.log(`🔥 Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(`❌ Error: ${error.message}`));
