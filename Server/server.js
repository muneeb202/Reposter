const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { dbConfig } = require('./config');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

const pool = mysql.createPool(dbConfig);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
