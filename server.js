var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details.
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address
  var port = process.env.PORT || server.address().port
  console.log("img2pdf listening at %s:%s Port", host, port)
});
 
 
app.get('/form', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/thank'  method='post' name='form1'>";
  html += "Enter path of images: <input type= 'text' name='name'>";
  html += "<input type='submit' value='submit'>";
  html += "<INPUT type='reset'  value='reset'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
  delete require.cache[require.resolve('./index.js')]

});
 
app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply = req.body.name;
  res.send("your pdf will be available shortly at path"+reply);

 runpdffunc(reply);
 
 });

function runpdffunc(input) {
  
  var a=input;
  module.exports.a =a
  require('./index');
  console.log("your form is submitted")


}
