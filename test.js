var express = require('express');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.param("name", function(req, res, next, id){
    console.log("here is name");
    console.log(req + res + next+ id);
});

app.get('/api/', function (req, res, next) {
    console.log('although this matches');
    next();
});

app.get("/api/", function (req, res) {
    console.log(req.address);
    res.send(req.param("name"));
});

app.get("/api/1", function (req, res) {
    console.log(req.address);

});

app.get("/", function (req, res) {
    console.log(req.body);
    res.send("Service is available!");
});

app.listen(server_port,server_ip_address, function () {
    console.log('Example app listening on '+server_ip_address + ':'+server_port+'!');
});