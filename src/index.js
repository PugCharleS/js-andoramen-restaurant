const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

// Routes
app.use('/api/dbrestaurant',require('./routes/dbrestaurant'));

// Middlewars
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Starting Server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});