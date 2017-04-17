var express = require('express');
var app = express();
var unirest = require('unirest');
var bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

/*app.get('/', function(req, res){
     res.sendfile("public/index.html") ; 
});*/
/*app.post('/login', function(req, res){
var id = req.body.id;
var amount = req.body.amount;
var currency= req.body.currency ;*/

unirest.post('http://localhost:8000/tester?')
.headers({'Accept': 'application/json', 'Content-Type': 'application/json','Host':'test.com'})
.send({ "id": 55 , "amount": 88  })
.end(function (response) {
 console.log(response.body);

});


