const express = require('express')
const router = express.Router()
//When I add this line my app crashes
//const Post = require('./../models/post')

router.get('/new', (req, res) => {
    res.render('posts/new')
})

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        question: req.body.question

    })

})


module.exports = router