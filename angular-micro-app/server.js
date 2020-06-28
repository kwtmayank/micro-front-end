const express = require('express');
const path = require('path');
const port = 3002 || process.env.PORT;
const app = express();


app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   next();
});


app.use("/dist", express.static(__dirname + '/dist'));

// viewed at http://localhost:3000
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/manifest', function (req, res) {
   res.sendFile(path.join(__dirname + '/asset-manifest.json'));
});

app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});