const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = Schema({
    title: {
        type: String,
        required: true,
        max: 50
    },
    content: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema)