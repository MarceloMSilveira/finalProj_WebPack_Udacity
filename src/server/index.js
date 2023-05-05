let projData = {};
var path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

// Cors for cross origin allowance
app.use(cors())
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

//REQUEST TO API
let APIresponse = ''

function askMeaningCloudAPI (userText) {
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("txt", userText);
    formdata.append("lang", "es");  // 2-letter code, like en es fr ...

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const urlMCloud = "https://api.meaningcloud.com/sentiment-2.1"
    
    //My fetch:
    fetch(urlMCloud, requestOptions)
    .then(resp => resp.json())
    .then((resp) => {
        console.log(resp.subjectivity)
        projData = {APIresponse : resp.subjectivity}
    })
    .catch(error => console.log('error', error));
}

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8051, function () {
    console.log('Example app listening on port 8051!')
})

app.get('/all', function (req, res) {
    res.send(projData)
})

//post route to recieve text to be analized
app.post('/dataPost', (req,res)=> {
  console.log(req.body.userResp);
  let userText = req.body.userResp;
  askMeaningCloudAPI(userText);
  console.log(APIresponse);
  res.send = {APIResp:APIresponse};
})


/* ORIGINAL FROM API SITE:
const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));
*/