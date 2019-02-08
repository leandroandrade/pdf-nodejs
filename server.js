'use strict';

const express = require('express');
const pdfmake = require('./routes/pdfmake-route');

const app = express();

app.use('/pdfmake', pdfmake);

app.listen(3000, function () {
    console.log('Starting server on port 3000');
});