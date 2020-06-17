const Post = require('../models/post')


// GET all Posts
exports.post_list = function(req, res) {
    res.send('Coming Soon: Post List')
}


// GET News Post by title
exports.post_details = function(req, res) {
    res.send('Coming Soon: Post Details')
}


// GET and POST methods for Creating New Posts
exports.get_new_post = function(req, res) {
    res.send('Coming Soon: GET function for new posts')
}

exports.submit_new_post = function(req, res) {
    res.send('Coming Soon: POST function for new posts')
}


// Get + POST methods for Editing Posts
exports.get_post_edit = function(req, res) {
    res.send('Coming Soon: GET function for editing posts')
}

exports.submit_post_edit = function(req, res) {
    res.send('Coming Soon: POST function for editing posts')
}


// GET + POST methods for Deleting Posts
exports.get_post_delete = function(req, res) {
    res.send('Coming Soon: GET function for deleting posts')
}

exports.submit_post_delete = function(req, res) {
    res.send('Coming Soon: POST function for deleting posts')
}