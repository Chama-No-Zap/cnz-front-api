const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./controllers');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(controller.receiveMessage);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));
