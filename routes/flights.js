var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET flights listing. */
router.get('/', flightsCtrl.index);

//get requests to  /flights/new
router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

//Post request to /movies
router.post('/', flightsCtrl.create);

module.exports = router;
