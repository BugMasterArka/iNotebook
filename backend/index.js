// requiring our mongo connection file
const connectToMongo = require('./db');
// requiring express
const express = require('express');
// const bodyParser = require('body-parser');

// functions that connects to mongo
connectToMongo();

const app = express()
// default port
const port = 5000

// app.use(bodyParser.urlencoded({extended: true}));
// taking only json input 
app.use(express.json());

// Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// listener function for server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

