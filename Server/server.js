const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Routes
const userRoute = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

// Loading models
sequelize.sync().then(() => {
    console.log('All models were synchronized successfully.');
}).catch((error) => {
    console.error('Unable to synchronize models:', error);
});

// Loading Routes
app.use('/user', userRoute)
app.use('/chatapi', chatRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
