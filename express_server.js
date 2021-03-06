var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/controllers'));

app.get("/", function(req,res){
  res.status(200).sendFile(__dirname + '/views/login.html');
});

app.listen(process.env.PORT || 9000);
