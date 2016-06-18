var express = require('express');
var mysql = require('mysql');
var router = express.Router();


var connection = mysql.createConnection({
  'host' : 'sopt.chkqolnlcrw1.ap-northeast-2.rds.amazonaws.com:3306',
  'user' : 'user',
  'password' : 'dyd06812',
  'database' : 'sopt';
});
/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('select id, title, timestamp form board '+' order by timestamp desc;', function(error, cursor){
    res.json(cursor);
  });
});

module.exports = router;
