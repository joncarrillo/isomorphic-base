const express = require('express');
const router = express.Router();

router.get('/test', function (req, res) {
    const result = {
        id: 1,
        value: 'jojo'
    };

    res.send(result);
});

module.exports = router;