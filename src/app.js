const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {sequelize,connectDb} = require("./config/db.config");
const authRoutes = require('./routes/auth.routes');
const frontendRoutes = require('./routes/frontend.routes');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// --- Routes Registration ---
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/frontend', frontendRoutes);


// Base Route Test
app.get('/api/v1/health', (req, res) => {
    //server and database health check
    res.status(200).json({
        status: 'success',
        message: 'PureOlaa Engine is running smoothly.',
        timestamp: new Date() // note: bd time zone
    });
});


//server start function 
const startServer = async () => {
    // first of all connect with database
    await connectDb(); // note: until connect with database, it will be try to listen server
    
    // database table sync [same to laravel migration ]
    // { alter: true }// note: if true, it will update table when model changes  // note: It's forbidden to use false in production
    await sequelize.sync({ force: false }); // force: false means table will be sync without delete the data
    console.log('Database tables synchronized successfully. 📑');

    // access application listening port
    app.listen(PORT, () => {
        console.log(`PureOlaa Server is running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
    });
};
// bootstrap the function to  execution
startServer();