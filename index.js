// Importiere die notwendigen Module
require('dotenv').config();
var express = require('express');
var app = express();

// Aktiviere CORS für externe Tests
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// Statische Dateien bereitstellen
app.use(express.static('public'));

// Hauptseite
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Beispiel-API-Endpunkt
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// API-Endpunkt für die Header-Analyse
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software,
  });
});

// Server starten
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
