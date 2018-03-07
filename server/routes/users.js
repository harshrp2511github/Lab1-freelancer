var express = require('express');
var router = express.Router();
var connection = require('./database/db');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {

        var email= req.body.email;
        var password = req.body.password;
        connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            }else{
                 console.log(results);
                if(results.length >0){
                    if(results[0].password == password){
                        res.json({
                            status: 'true',
                            message: 'login sucessfull'
                        });
                    }
                    else{
                        res.send({
                            status: 'false',
                            message:'Email and password does not match'
                        });
                    }
                }
                else{
                    res.send({
                        status: 'false',
                        message: 'Email does not exits'
                    });
                }
            }
        });

});



router.post('/signup', function(req, res, next) {

    var users={

        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
            res.json({
                status: 'false',
                message:'there are some error with query'
            })
        }else{
            res.json({
                status: 'true',
                data:results,
                message:'user registered sucessfully'
            })
        }
    });

});
module.exports = router;
