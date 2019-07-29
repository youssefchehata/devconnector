// const Joi = require('joi')
//  Joi.objectId = require('joi-objectid')(Joi) //objectId

const connectDB = require('./config/db');

const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

connectDB(); // CONNECT TO DATA_BASE
app.get('/', (req, res) => res.send('GET FOR TEST')); //FOR TEST EXPRESS

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
