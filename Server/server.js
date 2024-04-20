const express = require('express');
const mysql = require('mysql2');
const sequelize = require('./database');
const cors = require('cors');
const { dbConfig } = require('./config');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

// const pool = mysql.createPool(dbConfig);

// Loading models
const User = require('./models/userModel');

sequelize.sync().then(() => {
    console.log('All models were synchronized successfully.');
  }).catch((error) => {
    console.error('Unable to synchronize models:', error);
  });
const userRoute = require('./routes/user')

app.use("/user", userRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
