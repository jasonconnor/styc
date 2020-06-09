const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send('News Index')
})

module.exports = router;