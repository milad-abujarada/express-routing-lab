var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
// How do we 'require' the candyRouter file?
var candyRouter = require(__dirname + '/candyRouter');

app.use(bodyParser.json());

app.use('/candies', candyRouter);

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use

app.listen(3000);