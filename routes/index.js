var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader("x-frame-options", "deny");
  res.setHeader("x-node-version", process.version);
  res.render('index', { title: 'Express' });
});

module.exports = router;
