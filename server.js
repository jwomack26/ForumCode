const express = require('express')
const articleRouter = require('./routes/posts')
const app = express()


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jwomack26:<Mags022693!>@forum.iieh4.mongodb.net/Forum?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.set('view engine', 'ejs')

app.use('/posts', articleRouter)
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const posts = [{
        title: 'Test Post',
        createdAt: new Date(),
        description: 'Test description'},
        {
            title: 'Test Post 2',
            createdAt: new Date(),
            description: 'Test description 2'
        }]
    res.render('posts/index', { posts: posts })
})

app.listen(3000)