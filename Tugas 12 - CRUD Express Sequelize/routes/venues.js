var express = require('express');
var router = express.Router();

const venues = require('../controllers/venues.js');

/* GET users listing. */
router.get('/', venues.findAll);
router.post('/', venues.insertData);
router.get('/:id', venues.findById);
router.put('/:id', venues.updateById);
router.delete('/:id', venues.deleteById);

module.exports = router;
