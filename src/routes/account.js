const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send('Account Index')
})

module.exports = router;