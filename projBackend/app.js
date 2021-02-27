require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
//my routes

//middlewares
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.listen(process.env.PORT || 8000, () => {
  console.log(`app is running  and portno: ${process.env.PORT}`);
});
