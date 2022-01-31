const express = require('express');
const app = express();

const server = require('http').createServer(app);

const port = 3000;

server.listen(port, () => {
  console.log('Webserver läuft. Port: %d', port);
});
