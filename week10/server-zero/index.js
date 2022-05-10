'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan("default"));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('HOME Page!!!');
    res.end();
} );

app.get('/abc')

app.listen(3000, ()=>{console.log('server started')});
