const express = require('express')
const router = express.Router()

const scoreController = require('../controllers/score')

router.get('/', function(req, res) {
    res.send('App Index')
})

router.get('/play', function(req, res) {
    res.send('Route to play game')
})

router.get('/highscores', scoreController.get_highscores)

module.exports = router;