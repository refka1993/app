var express = require('express');
var app = express();
var bodyParser =require('body-parser');
var unirest = require('unirest');
var http = require('http');
var request = require('request');
var router = express.Router();
//console.log(_dirname);
app.use("/",express.static("animated-signup-flow"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
     res.sendfile("animated-signup-flow/index.html") ; 
});
app.post('/transfer', function(req, res){
var id = req.body.from;
var to = req.body.to;
var amount= req.body.amount ;
//if ( currency == 'fiat' )
//{
unirest
.get('http://localhost:8000/tester1?')
.headers({'Accept': 'application/json', 'Content-Type': 'application/json','Host':'test1.com'})
.send({ "id": id , "amount": amount})
.end(function (res) {
console.log(res.status,res.headers,res.body);

})
/*}// finif1
 else if ( currency == 'ether') 
{
unirest
.post('http://localhost:8000/tester?')
.headers({'Accept': 'application/json', 'Content-Type': 'application/json','Host':'test.com'})
.send({ "id": id , "amount": amount})
.end(function (res) {
console.log(res.status,res.headers,res.body);

})
} // finif2 */

if (res.status == 200 ){
res.send('succes');}
else
{ 
res.send('echec');
}





});

app.listen(3000);

console.log("Running at Port 3000");
