const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/about', (req, res) => {
  res.send('About app');
});

router.get('/template', (req, res) => {
  res.sendFile(`${path.join(__dirname, '../')}/template.html`);
});

module.exports = router;
