var path = require('path')
const express = require('express')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);
const aplication_key = process.env.API_KEY;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8051, function () {
    console.log('Example app listening on port 8051!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
