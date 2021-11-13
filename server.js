var express = require('express');
var path = require('C:/Users/Tousif/Downloads/Others');

var app = express();

app.use(express.static(path.resolve(__dirname, 'Intern.html')));

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
