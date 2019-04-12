"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
// import express
// import from User to define the endpoints 
// import User from './src/controllers/User';
// create an instance of express
var app = (0, _express["default"])(); // Setting up the middleware needed to get access to the request body

app.use(_express["default"].json()); // An endpoint to test if the server is working

app.get('/', function (req, res) {
  return res.status(200).send({
    'message': 'Hi Ridwan, Your server is working'
  });
});
app.listen(8000);
console.log('app running on port ', 8000); //user end points
// app.post('/api/v1/users', User.create);
// app.get('/api/v1/users', User.getAll);
// app.get('/api/v1/users/:id', User.getOne);
// app.put('/api/v1/users/:id', User.update);
// app.delete('/api/v1/users/:id', User.delete);