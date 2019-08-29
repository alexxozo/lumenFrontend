// Module dependencies.
const express = require('express'),
  mainRoutes = require('./routes'),
  config = require('./config');

const app = express(),
  port = process.env.PORT || config.app.port;

// View Engine
app.set('view engine', 'pug');

// Middleware
app.use('/public', express.static('./public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// App routes
app.use(mainRoutes);

// Not Found Error
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    err: err.message,
    status: err.status
  });
});

// Run server
app.listen(port, () => console.log('Starting the server on port: ' + port));

// ACEASTA LINIE ESTE ADAUGATA