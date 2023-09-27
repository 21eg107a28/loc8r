require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/locations');
var ctrlothers = require('../controller/others');
/* Locations page */
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);

/*Others pages*/
router.get('/about',ctrlothers.about);
router.get('/signin',ctrlothers.signin);
router.get('/register',ctrlothers.register);
module.exports=router;
