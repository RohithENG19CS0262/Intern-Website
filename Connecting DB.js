var express = require('express');
var path = require('C:\Users\Tousif\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\MongoDB Inc');
var mongodb = require('mongodb');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

var app = express();

app.use(express.static(path.resolve(__dirname, 'Landing page.html')));

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
