const express = require('express');
const {server : {port}} = require('./config/default');
const app = express();
const apiRouter = require('./api');
const appRouter = require('./app/server');

app.use('/api', apiRouter);
app.use('/app', appRouter);

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});