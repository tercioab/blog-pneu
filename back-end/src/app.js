const express = require('express');
const post = require('./routes/post.router');

const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*',
  }));

  app.use('/post', post);

module.exports = app;