const express = require('express');
const { server: { port } } = require('./config/default');
const apiRouter = require('./api');
const appRouter = require('./app/server');

const app = express();

app.use('/api', apiRouter);
app.use('/app', appRouter);
app.use('/static', express.static('public'));
app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
