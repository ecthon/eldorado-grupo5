require('dotenv').config();

const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.API_PORT, () => console.log('Server started at http://localhost:3000'));
