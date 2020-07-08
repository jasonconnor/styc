const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

router.get('/', function(req, res) {
    res.send('App Index')
})

router.post('/register', userController.register)

module.exports = router;