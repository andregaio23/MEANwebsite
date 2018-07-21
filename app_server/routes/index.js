var express = require('express');
var router = express.Router();
var cntrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Location pages. */
router.get('/', cntrlLocations.homelist);
router.get('/location', cntrlLocations.locationInfo);
router.get('/location/review/new', cntrlLocations.addReview);

/* Other pages. */
router.get('/about', ctrlOthers.about);

module.exports = router;
