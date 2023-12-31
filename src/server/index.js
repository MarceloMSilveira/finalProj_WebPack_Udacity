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

async function askMeaningCloudAPI (user_URL) {
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("url", user_URL);
    formdata.append("lang", "auto"); 

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const urlMCloud = "https://api.meaningcloud.com/sentiment-2.1"
    
    //My fetch:
    const resp = await fetch(urlMCloud, requestOptions)
    
    try {
      const newData = await resp.json()
      projData = newData
      return newData
    } catch (error) {
      error => console.log('error', error)
    }
        
}

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8051, function () {
    console.log('Listening on port 8051!')
})

app.get('/all', function (req, res) {
    console.log(`Inside get/all: ${projData.agreement}`)
    res.send(projData)
})

//post route to recieve text to be analized
app.post('/dataPost', (req,res)=> {
  console.log(req.body.userResp)
  let user_URL = req.body.userResp
  askMeaningCloudAPI(user_URL)
  .then (
    (data) => {
      console.log(`in dataPost: ${data.subjectivity}`)
      res.send(data)
    }
  )
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