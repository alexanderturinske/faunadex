var express = require('express');
var app = express();
var path = require('path');

app.listen(9999);

app.use(express.static(path.join(__dirname, '../client')));