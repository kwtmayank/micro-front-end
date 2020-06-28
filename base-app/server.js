const express = require("express");
const path = require('path');
const port = 3000 || process.env.PORT;
const dotenv = require('dotenv');
const request = require('request');
const app = express();


dotenv.config();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use("/public", express.static(__dirname + '/public'));

// viewed at http://localhost:3000
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/manifest/:name', (req, res) => {
  const appName = req.params.name;
  let destinationURL;
  console.log(`Requesr recived to fetch manifest for ${req.params.name}`);
  if(appName==='profileList'){
    destinationURL = `${process.env.PROFILE_LIST_HOST}\\manifest`;
  }else{
    destinationURL = `${process.env.PROFILE_DETAILS_HOST}\\manifest`;
  }

  request(
    { url: destinationURL },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  )
});


app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
