const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3000;

const axios = require('axios');
// Abgerufen werden können Infos über:
// https://pokeapi.co/api/v2/pokemon/name
const pokeapi = 'https://pokeapi.co/api/v2/';

const htmlHead = `<!DOCTYPE html>
<html>
  <head>
    <title>Hallo Welt!</title>
    <meta charset="utf-8" />
  </head>
  <body>
    `;
const htmlFoot = `
  </body>
</html>`;

server.listen(port, () => {
  console.log('Webserver läuft. Port: %d', port);
});

app.get('/:name*', (req, res) => {
  //console.log(req);
  // res.send('Hällo ägän');
  axios
    .get(pokeapi + 'pokemon/' + req.params['name'])
    .then((reponse) => {
      res.send(
        htmlHead +
          '<h1>Hier ist ' +
          req.params['name'] +
          '</h1><img src="' +
          reponse.data.sprites.other['official-artwork'].front_default +
          '"><p>' +
          req.params['name'] +
          ' ist das ' +
          reponse.data.order +
          'ste Pokemon.</p>' + // Größe und Masse
          htmlFoot
      );
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});
