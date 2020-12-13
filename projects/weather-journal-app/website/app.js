/* Global Variables */


//weather api key of  OpenWeatherMap.com
const weatherBaseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const weatherApiKey = '91d0e67a4338df34d1a3c031bd2eb33c';

const exampleUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,GB&APPID=91d0e67a4338df34d1a3c031bd2eb33c';

const exampleUrlLocal = 'http://api.openweathermap.org/data/2.5/weather?zip=11511,EG&units=metric&APPID=91d0e67a4338df34d1a3c031bd2eb33c';
const exampleUrlLocal1 = 'http://api.openweathermap.org/data/2.5/weather?q=Alexandria,EG&units=metric&APPID=91d0e67a4338df34d1a3c031bd2eb33c';


// DOM elements
const button = document.querySelector('#generate');
const zipCodeLabel = document.querySelector('#zip');
const feelingTextArea = document.querySelector('#feelings');
const dateDiv = document.querySelector('#date');
const TempDiv = document.querySelector('#temp');
const contentDiv = document.querySelector('#content');




/**
 * @description creates a GET request and return the data in json format
 * @param url the url to create GET request for
 * @return the fetched data in json format
 **/
const getData = async (url='') => {

    // wait until fetch is executed then move to the next line
    const response = await fetch(url);

    try {
        const receivedData = await response.json();
        // TODO remove the log message
        console.log(receivedData);
        return receivedData;

    } catch(error) {
        // TODO remove this log statement
        console.log('Error: ', error);
    }

};



/**
 * @description creates a GET request and return the data in json format,
 *               and throw error to be caught with a catch method of a promise.
 * @param url the url to create GET request for
 * @return the fetched data in json format
 **/
const getDataExternal = async (url='') => {

    // wait until fetch is executed then move to the next line
    const response = await fetch(url);

    if (!response.ok) {
        throw Error('City not found or Network Error');
    }


    const receivedData = await response.json();
    // TODO remove the log
    return receivedData;
};



/**
 * @description creates a POST request and return the Reply data in json format
 * @param url the url to create GET request for
 * @return the received data from the server
 **/
const postData = async (url='', data={}) => {

    const postRequestMsg = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),// body data type must match "Content-Type" header
    };

    // variable to store in it the received data form post request from http
    const responseData = await fetch(url, postRequestMsg);


    try {
        const receivedData = await responseData.json();
        return receivedData;
    } catch(error) {
        console.log('Error: ', error);
    }
};


/**
 * @description  fetches weather data with zip code and country code.
 * @param url the url to create GET request for
 * @param zipCode the zip code
 * @param countryCode the ISO3166-1.alpha2 code of the country, the default is 'us'
 * @param units the type of the units.
 * @return weather data object at this form: https://openweathermap.org/current#zip
 * Examples:
 * getWeatherDataByZipCode('us', '94040');
 * getWeatherDataByZipCode('un', '94040').catch( e => {console.log('bypassing error')});
 **/
const getWeatherDataByZipCode = async (zipCode='', countryCode='us', units='metric') => {
    const baseUrl = weatherBaseUrl;
    const key = weatherApiKey;
    const url = `${baseUrl}?zip=${zipCode},${countryCode}&units=${units}` +
          `&APPID=${key}`;

    return getDataExternal(url);

};



const getWeatherDataByCityName = async (countryCode='', cityName='', units='metric') => {
    const baseUrl = weatherBaseUrl;
    const key = weatherApiKey;
    const url = `${baseUrl}?q=${cityName},${countryCode}&units=${units}` +
          `&APPID=${key}`;

    return getDataExternal(url);

};




async function updateUiSuccess(commingWeatherData) {
}



async function updateUiFailed(error) {
}


function buttonPressedCallback() {

    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    // date from the user
    const zipCode = zipCodeLabel.value;
    const feeling = feelingTextArea.value;


    // calling api and chaining actions
    getWeatherDataByZipCode(zipCode)
        .then ((weatherData) => {
            weatherData.feeling = feeling;
            weatherData.date = newDate;
            postData('/addWeatherData', weatherData);
        })

        .then(getData('/getWeatherEndPoint'))

        .then(commingWeatherData => {
            updateUiSuccess(commingWeatherData);
        })

        .catch(error => {
            updateUiFailed(error);
        });

}


// main code
button.addEventListener('click', buttonPressedCallback);






