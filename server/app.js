const express = require('express');
const { join } = require('path');
const compression = require('compression');
const router = require('./routes');

const app = express();
app.use(compression());
app.disabled('x-powered-by');
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'public'), { maxAge: '30d' }));
app.use(router);
app.set('port', process.env.PORT || 3000);

module.exports = app;
