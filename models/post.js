const MongoClient = require('mongodb').MongoClient

const postSchema = new MongoClient.Schema({

    title:{
        type: String, 
        required: true
    },
    question:{
        type: String
    },
    createdAt :{
        type: Date,
        default: Date.now
    }
})

module.exports = MongoClient.model('Post', postSchema)