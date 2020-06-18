const User = require('../models/user')


// GET all Users
exports.user_list = function(req, res) {
    res.send('Coming Soon: user List')
}


// GET User by username
exports.user_details = function(req, res) {
    res.send('Coming Soon: user Details')
}


// GET and POST methods for Creating New Users
exports.get_new_user = function(req, res) {
    res.send('Coming Soon: GET function for new users')
}

exports.submit_new_user = function(req, res) {
    res.send('Coming Soon: POST function for new users')
}


// Get + POST methods for Editing Users
exports.get_user_edit = function(req, res) {
    res.send('Coming Soon: GET function for editing users')
}

exports.submit_user_edit = function(req, res) {
    res.send('Coming Soon: POST function for editing users')
}


// GET + POST methods for Deleting Users
exports.get_user_delete = function(req, res) {
    res.send('Coming Soon: GET function for deleting users')
}

exports.submit_user_delete = function(req, res) {
    res.send('Coming Soon: POST function for deleting users')
}