const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes');
const sizesRoutes = require('./routes/sizes.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);
app.use('/api', sizesRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ page: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '/client/build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


/* MONGOOSE */
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';


if(NODE_ENV === 'production') dbUri = `mongodb+srv://JUSTI:test123@cluster0.epgpr.mongodb.net/mariana?retryWrites=true&w=majority`;
  else dbUri = 'mongodb://localhost:27017/mariana';

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => {
  if(process.env.production === true) console.log('Couldn\'t connect to db...');
  else console.log(err);
});

/* START SERVER */
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

