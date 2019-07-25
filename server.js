// const Joi = require('joi')
//  Joi.objectId = require('joi-objectid')(Joi) //objectId

const connectDB = require('./config/db');

const express = require('express');
const app = express();

app.use(express.json());
connectDB(); // CONNECT TO DATA_BASE
app.get('/', (req, res) => res.send('GET FOR TEST')); //FOR TEST EXPRESS

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
