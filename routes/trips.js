//const fetch = require('node-fetch');
const Trip = require('../models/trips');

const OWM_API_KEY = 'ce7418650c86eae6629dfcfdda141c14';

// router.post('/', (req, res) => {
//   // Check if the city has not already been added
//   City.findOne({ cityName: { $regex: new RegExp(req.body.cityName, 'i') } }).then(dbData => {
//     if (dbData === null) {
//       // Request OpenWeatherMap API for weather data
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${OWM_API_KEY}&units=metric`)
//         .then(response => response.json())
//         .then(apiData => {
//           // Creates new document with weather data
//           const newCity = new City({
//             cityName: req.body.cityName,
//             main: apiData.weather[0].main,
//             description: apiData.weather[0].description,
//             tempMin: apiData.main.temp_min,
//             tempMax: apiData.main.temp_max,
//           });