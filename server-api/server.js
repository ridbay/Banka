import bodyParser from 'body-parser';
import express from 'express';

// import from User to define the endpoints 
import User from './src/controllers/User';
import Account from './src/controllers/Account';
import Transaction from './src/models/Transaction';


// create an instance of express
const app = express();

// Set port
const port = process.env.PORT || 8000;

// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// // Setting up the middleware needed to get access to the request body
// app.use(express.json());


// An endpoint/route to test if the server is working
app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Hi Ridwan, Your server is working'});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//user end points

app.post('/api/v1/users', User.create);
app.get('/api/v1/users', User.getAll);
app.get('/api/v1/users/:id', User.getOne);
app.put('/api/v1/users/:id', User.update);
app.delete('/api/v1/users/:id', User.delete);

//accounts end points

app.post('/api/v1/accounts', Account.create);
app.get('/api/v1/accounts', Account.getAll);
app.get('/api/v1/accounts/:id', Account.getOne);
app.put('/api/v1/accounts/:id', Account.update);
app.delete('/api/v1/accounts/:id', Account.delete);

//transactions end points

app.post('/api/v1/transactions', Transaction.create);
//app.get('/api/v1/transactions', Transaction.getAll);
// app.get('/api/v1/transactions/:id', Transaction.getOne);
app.put('/api/v1/transactions/:id', Transaction.update);
app.delete('/api/v1/transactions/:id', Transaction.delete);

// // Export app for testing purposes
export default app;
