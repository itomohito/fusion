const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();
const rootRoute = require('./routes/root');
const loginRoute = require('./routes/login');

// PORT
const PORT = process.env.PORT || 1000;

// Setting view engine
app.set('view engine', 'ejs');
// Middleware
app.use(helmet());
app.use('/public', express.static('public'));


// Route handlers
app.use('/', rootRoute);
app.use('/login', loginRoute);

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
});