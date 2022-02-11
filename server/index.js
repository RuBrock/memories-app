import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

//SETUP BodyParser - limit to control images size
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//https://www.mongodb.com/pt-br/atlas/database
const CONNECTION_URL = 'mongodb+srv://rubrock:rubrock123@cluster0.t8cfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`🔥 Server running on port: ${PORT}`)))
  .catch((error) => console.log(`❌ Error: ${error.message}`));
