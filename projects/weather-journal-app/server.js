// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

// Running the server
const port = 8000;
app.listen(port, listenCallback);

function listenCallback() {
    console.log(`Server is Running ......`);
}


// get stored weather data
app.get('/getWeatherEndPoint', getWeatherDataCallback);

function getWeatherDataCallback(request, response) {
    response.send(projectData);
}




// post request to save weather data
app.post('/addWeatherData', addWeatherDataCallback);

function addWeatherDataCallback (request, responses) {
    projectData = request.body;
    console.log(projectData);
    // we muse send response back, otherwise the promise will be in pending
    // state for ever
    responses.send({code: 200});
}


