const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    username: String,
    content: String,
    date: Date
});



const postSchema = new mongoose.Schema({
    title: String,
    photo: String,
    name: String,
    content: String,
    category: String,
    date: Date,
    postType: String,
    comment: [commentSchema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post