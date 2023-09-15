require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/locations');
var ctrlOthers = require('../controller/others');
var ctrlSignin = require('../controller/signin');
var ctrlRegister = require('../controller/register');
/* Locations page */
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location2',ctrlLocations.locationInfo2);
router.get('/location3',ctrlLocations.locationInfo3);
router.get('/location/review/new',ctrlLocations.addReview);

/*Others pages*/
router.get('/about',ctrlOthers.about);

router.get('/signin', ctrlSignin.signin);

router.get('/register', ctrlRegister.register)

module.exports = router;
