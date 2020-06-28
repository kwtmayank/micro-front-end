var express = require('express');
var app = express();
var path = require('path');
var port = 3001;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use("/public", express.static(__dirname + '/public'));

// viewed at http://localhost:3000
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/manifest', function (req, res) {
    res.sendFile(path.join(__dirname + '/asset-manifest.json'));
});

app.listen(port, function () {
    console.log('React app listening on port '+port)
});