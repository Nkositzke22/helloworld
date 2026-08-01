// Name:        app.js
// Description: simple node.js and express app

// Import the express module
var express = require('express');

// Initialize express by instantiating it and assigning to 'app'
var app = express();

// Root Route - responds to HTTP GET requests at '/'
app.get('/', function (req, res) {
  console.log("in app.js. The root route has been hit ...");
  res.status(200);
  res.send('Hello World - from my new Geog 576 node.js express app!');
});

// App listens on Port 8000 for incoming network requests
app.listen(8000, function (err) {
  if (err) console.log("Error starting server. Msg: " + err);
  console.log('Node.js and Express app listening on port 8000!');
});