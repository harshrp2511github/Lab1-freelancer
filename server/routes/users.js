var express = require('express');
var router = express.Router();
var connection = require('./database/db');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
    var username=req.body.username;
    var password=req.body.password;
    connection.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            if(results.length >0){
                if(password==results[0].password){
                    res.json({
                        status:true,
                        message:'successfully authenticated'
                    })
                }else{
                    res.json({
                        status:false,
                        message:"Username and password does not match"
                    });
                }

            }
            else{
                res.json({
                    status:false,
                    message:"Email does not exits"
                });
            }
        }
    });
});

router.post('/signup', function(req, res, next) {

    var users={
        "name":req.body.name,
        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            res.json({
                status:true,
                data:results,
                message:'user registered sucessfully'
            })
        }
    });

});
module.exports = router;
