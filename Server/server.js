const express = require('express');
const mysql = require('mysql2');
const sequelize = require('./database');
const cors = require('cors');
const { dbConfig } = require('./config');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Routes
const userRoute = require('./routes/brandRoutes')

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

// const pool = mysql.createPool(dbConfig);

// Loading models
sequelize.sync().then(() => {
    console.log('All models were synchronized successfully.');
}).catch((error) => {
    console.error('Unable to synchronize models:', error);
});

// Loading Routes
app.use("/brand", userRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
