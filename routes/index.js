var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.views )req.session.views = 1;
  else req.session.views ++;
  let vis = req.session.views
  res.render('index',{visita:vis});
});

module.exports = router;
