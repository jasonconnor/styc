const express = require('express')
const router = express.Router()

const postController = require('../controllers/post')

router.get('/', postController.post_list)

module.exports = router;