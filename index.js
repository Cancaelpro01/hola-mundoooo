const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hola mundo!!!!!');
});

app.listen(port, () => {
    console.log('Aplicación escuchando en http://localhost:', port);
  });
  