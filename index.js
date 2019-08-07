'use strict';

// load modules
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

// set our port
app.set('port', process.env.PORT || 5000);

// morgan gives us http request logging
app.use(morgan('dev'));

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/cmc-api");
const db = mongoose.connection;

//Mongoose error
db.on('error', console.error.bind(console, 'connection error:'));

//Database connect message
db.once('open', () => console.log("Connection to database a success!"))


// include routes
const routes = require('./routes/index');
app.use('/api', routes);

// send a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Coin Market App API'
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found'
  })
})

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});

const data = [
  {
    "_id": {
      "$oid": "57029ed4795118be119cc437"
    },
    "name": "Bitcoin",
    "price": 11308.3117787,
    "ticker": "BTC",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc438"
    },
    "name": "Litecoin",
    "price": 100.3117787,
    "ticker": "LTC",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc439"
    },
    "name": "Bitcoin Cash",
    "price": 411.3117787,
    "ticker": "BCH",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc440"
    },
    "name": "Zcash",
    "price": 68.3117787,
    "ticker": "ZEC",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc441"
    },
    "name": "Cardano",
    "price": 0.0811951112737,
    "ticker": "ADA",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc442"
    },
    "name": "Ripple",
    "price": 0.401843316216,
    "ticker": "XRP",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc443"
    },
    "name": "Stellar",
    "price": 0.104022391965,
    "ticker": "XLM",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc444"
    },
    "name": "EOS",
    "price": 5.90547067251,
    "ticker": "EOS",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc445"
    },
    "name": "TRON",
    "price": 0.0319496725947,
    "ticker": "TRX",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc446"
    },
    "name": "Ethereum",
    "price": 292.481814818,
    "ticker": "ETH",
    "created_at": "2019-08-03 16:56:58",
    "updated_at": "2019-08-03 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc447"
    },
    "name": "Bitcoin",
    "price": 11401.3117787,
    "ticker": "BTC",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc448"
    },
    "name": "Litecoin",
    "price": 103.3117787,
    "ticker": "LTC",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc449"
    },
    "name": "Bitcoin Cash",
    "price": 418.3117787,
    "ticker": "BCH",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc450"
    },
    "name": "Zcash",
    "price": 69.3117787,
    "ticker": "ZEC",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc451"
    },
    "name": "Cardano",
    "price": 0.0861951112737,
    "ticker": "ADA",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc452"
    },
    "name": "Ripple",
    "price": 0.431843316216,
    "ticker": "XRP",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc453"
    },
    "name": "Stellar",
    "price": 0.103022391965,
    "ticker": "XLM",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc454"
    },
    "name": "EOS",
    "price": 5.20547067251,
    "ticker": "EOS",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc455"
    },
    "name": "TRON",
    "price": 0.0339496725947,
    "ticker": "TRX",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc466"
    },
    "name": "Ethereum",
    "price": 296.481814818,
    "ticker": "ETH",
    "created_at": "2019-08-04 16:56:58",
    "updated_at": "2019-08-04 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc467"
    },
    "name": "Bitcoin",
    "price": 11608.3117787,
    "ticker": "BTC",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc468"
    },
    "name": "Litecoin",
    "price": 106.3117787,
    "ticker": "LTC",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc469"
    },
    "name": "Bitcoin Cash",
    "price": 418.3117787,
    "ticker": "BCH",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc470"
    },
    "name": "Zcash",
    "price": 74.3117787,
    "ticker": "ZEC",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc471"
    },
    "name": "Cardano",
    "price": 0.0931951112737,
    "ticker": "ADA",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc472"
    },
    "name": "Ripple",
    "price": 0.424843316216,
    "ticker": "XRP",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc473"
    },
    "name": "Stellar",
    "price": 0.125022391965,
    "ticker": "XLM",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc474"
    },
    "name": "EOS",
    "price": 6.40547067251,
    "ticker": "EOS",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc475"
    },
    "name": "TRON",
    "price": 0.0339496725947,
    "ticker": "TRX",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc476"
    },
    "name": "Ethereum",
    "price": 299.481814818,
    "ticker": "ETH",
    "created_at": "2019-08-05 16:56:58",
    "updated_at": "2019-08-05 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc477"
    },
    "name": "Bitcoin",
    "price": 11528.7117787,
    "ticker": "BTC",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc478"
    },
    "name": "Litecoin",
    "price": 101.4617787,
    "ticker": "LTC",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc479"
    },
    "name": "Bitcoin Cash",
    "price": 412.7917787,
    "ticker": "BCH",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc480"
    },
    "name": "Zcash",
    "price": 75.2347787,
    "ticker": "ZEC",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc481"
    },
    "name": "Cardano",
    "price": 0.03611951112737,
    "ticker": "ADA",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc482"
    },
    "name": "Ripple",
    "price": 0.3911843316216,
    "ticker": "XRP",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc483"
    },
    "name": "Stellar",
    "price": 0.1034022391965,
    "ticker": "XLM",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc484"
    },
    "name": "EOS",
    "price": 6.240547067251,
    "ticker": "EOS",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc485"
    },
    "name": "TRON",
    "price": 0.035719496725947,
    "ticker": "TRX",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc486"
    },
    "name": "Ethereum",
    "price": 311.341814818,
    "ticker": "ETH",
    "created_at": "2019-08-06 16:56:58",
    "updated_at": "2019-08-06 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc487"
    },
    "name": "Bitcoin",
    "price": 10908.3117787,
    "ticker": "BTC",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc488"
    },
    "name": "Litecoin",
    "price": 99.4317787,
    "ticker": "LTC",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc489"
    },
    "name": "Bitcoin Cash",
    "price": 408.3417787,
    "ticker": "BCH",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc490"
    },
    "name": "Zcash",
    "price": 64.2417787,
    "ticker": "ZEC",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc491"
    },
    "name": "Cardano",
    "price": 0.0800341112737,
    "ticker": "ADA",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc492"
    },
    "name": "Ripple",
    "price": 0.3915843316216,
    "ticker": "XRP",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc493"
    },
    "name": "Stellar",
    "price": 0.09244022391965,
    "ticker": "XLM",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc494"
    },
    "name": "EOS",
    "price": 5.780547067251,
    "ticker": "EOS",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc495"
    },
    "name": "TRON",
    "price": 0.0034496725947,
    "ticker": "TRX",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc496"
    },
    "name": "Ethereum",
    "price": 290.441814818,
    "ticker": "ETH",
    "created_at": "2019-08-07 16:56:58",
    "updated_at": "2019-08-07 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc497"
    },
    "name": "Bitcoin",
    "price": 10508.4317787,
    "ticker": "BTC",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc498"
    },
    "name": "Litecoin",
    "price": 100.45617787,
    "ticker": "LTC",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc499"
    },
    "name": "Bitcoin Cash",
    "price": 404.6517787,
    "ticker": "BCH",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc500"
    },
    "name": "Zcash",
    "price": 69.6917787,
    "ticker": "ZEC",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc501"
    },
    "name": "Cardano",
    "price": 0.08051951112737,
    "ticker": "ADA",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc502"
    },
    "name": "Ripple",
    "price": 0.407543316216,
    "ticker": "XRP",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc503"
    },
    "name": "Stellar",
    "price": 0.1044022391965,
    "ticker": "XLM",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc504"
    },
    "name": "EOS",
    "price": 5.95547067251,
    "ticker": "EOS",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc505"
    },
    "name": "TRON",
    "price": 0.03323496725947,
    "ticker": "TRX",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc506"
    },
    "name": "Ethereum",
    "price": 296.461814818,
    "ticker": "ETH",
    "created_at": "2019-08-08 16:56:58",
    "updated_at": "2019-08-08 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc507"
    },
    "name": "Bitcoin",
    "price": 11143.5617787,
    "ticker": "BTC",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc508"
    },
    "name": "Litecoin",
    "price": 103.4517787,
    "ticker": "LTC",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc509"
    },
    "name": "Bitcoin Cash",
    "price": 424.4517787,
    "ticker": "BCH",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc510"
    },
    "name": "Zcash",
    "price": 71.54235,
    "ticker": "ZEC",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc511"
    },
    "name": "Cardano",
    "price": 0.08345951112737,
    "ticker": "ADA",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc512"
    },
    "name": "Ripple",
    "price": 0.435443316216,
    "ticker": "XRP",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc513"
    },
    "name": "Stellar",
    "price": 0.1135022391965,
    "ticker": "XLM",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc514"
    },
    "name": "EOS",
    "price": 5.993547067251,
    "ticker": "EOS",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc515"
    },
    "name": "TRON",
    "price": 0.033596725947,
    "ticker": "TRX",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "57029ed4795118be119cc516"
    },
    "name": "Ethereum",
    "price": 296.341814818,
    "ticker": "ETH",
    "created_at": "2019-08-09 16:56:58",
    "updated_at": "2019-08-09 16:56:58",
    "__v": 0
  }
]

function seed(data) {
  for (let obj in data) {
    let name = obj.name;
    let price = obj.price;
    let ticker = obj.ticker;
    let created_at = obj.created_at;
    let updated_at = obj.updated_at;
    fetch("https://techdegree-project-12-backend.herokuapp.com/api/cryptosnew", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        name: name,
        price: price,
        ticker: ticker,
        created_at: created_at,
        updated_at: updated_at
      })
    })
  }
}


seed(data);
