const express = require('express')
const router = express.Router()

const postController = require('../controllers/post')

router.get('/', postController.post_list)

router.get('/:title', postController.post_details)

module.exports = router;