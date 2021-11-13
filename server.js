var express = require('express');
var path = require('C:\Users\Tousif\node_modules\express\lib\express.js');

var app = express();

app.use(express.static(path.resolve(__dirname, 'Landing page.html')));

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
