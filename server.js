var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.listen(3000);
console.log('server running at port 3000');