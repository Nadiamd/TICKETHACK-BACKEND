var express = require("express")
var router = express.Router(); 
//const fetch = require('node-fetch');
const Trip = require('../models/trips');


//const OWM_API_KEY = 'ce7418650c86eae6629dfcfdda141c14';



router.post('/formulaire', (req, res) => {
    //console.log(req.body.departure);
  Trip.find({
    departure: { $regex: new RegExp(req.body.departure) , $options: "i" },
    arrival: { $regex: new RegExp(req.body.arrival) , $options : "i"},
    //date: req.body.date,
  }).then((dbData) => {
   console.log(dbData);
    if (dbData) {
      res.json({ result: true, trips: dbData });
    } else {
      res.json({ result: false, error: "Trip not found" });
    }
  })
})











      module.exports = router;





