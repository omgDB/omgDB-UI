var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(bodyParser());
app.use("/public", express.static(__dirname + "/public"));

var router = express.Router();

