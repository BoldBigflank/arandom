var express = require('express');
var router = express.Router();

var urls = require('../urls');


/* GET home page. */
router.get('/', function(req, res) {
  res.redirect(307, urls.getUrl());
});

module.exports = router;
