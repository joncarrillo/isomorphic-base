const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/about', function (req, res) {
    res.send('About app');
});

router.get('/template', (req, res) => {
    res.sendFile(path.join(__dirname, '../') + '/template.html');
});

module.exports = router;