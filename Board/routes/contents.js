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
router.get('/:content_id', function(req, res, next) {
  connection.query('select * form board where id=?;', [req.params.content_id], function (error, cursor){
    if (cursor.length > 0)
      res.json(cursor);
    else
      res.status(503).json({
        result : false, reason : "Cannot find Selected article"
      });
  });
});

router.post('/', fuction(req, res, next){
  connection.query('insert into board(title, content) values(?,?);',[req.body.title, req.body.content], function(error, info){
    if (error == null){
      connection.query('select * from board where id = ?;', [info.insertId], function(error, cursor){
        if (cursor.length > 0){
          res.json({
            result:ture, id:info.insertId, title:cursor.selectTtile, timestamp : cursor.selectTimestamp;
          });
        }
        else
          res.status(503).json({result:false, reason:"Cannot post article"});
        });
      }
    else
    res.status(503).json(error);
  });
});

module.exports = router;
