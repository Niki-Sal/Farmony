const db = require('../models')

const index = (req, res) => {
    console.log('=====> Displaying Posts')
    db.Post.find({
        category: 'Trade'
    }, 
    (err, foundPosts) => {
        if (err) console.log('Error in trade#index:', err)
        res.json(foundPosts)
    })
}

const create = (req, res) => {
    console.log('=====> Trade Created')
    db.Post.create({
        title: req.body.title,
        name: req.user.name,
        content: req.body.content,
        category: req.body.category,
        postType: req.body.postType,
        date: Date(),
    },(err, postCreated) => {
        if (err) console.log('Error in trade#create', err)
        res.json(postCreated)
    })
}


module.exports = {
    index,
    create,
};