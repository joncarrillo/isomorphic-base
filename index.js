const express = require('express');
const app = express();
const port = 3000;

app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/app/template.html');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});