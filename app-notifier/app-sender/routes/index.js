var util = require('util');
var express = require('express');
var messageSender = require("../messageSender.js");

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var msg = 'Hello - ' + Date.now();

  messageSender.send(msg).then(function(result){
    var ackMsg =  util.format('Msg sent and ack: %s', msg);
    console.log(ackMsg);
    res.render('index', { title: ackMsg });
  },function(err){
    var errMsg = util.format('Msg sent fail: %s, Error: %s',msg,err);
    console.log(errMsg);
    res.render('index', { title: errMsg });
  });

});

module.exports = router;
