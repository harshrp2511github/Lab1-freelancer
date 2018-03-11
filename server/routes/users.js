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

router.post('/setprofile', function(req, res, next) {

    var users_profile={

        "email":req.body.email
    }


    connection.query('INSERT INTO users_profile SET ?',users_profile, function (error, results, fields) {
        if (error) {
            res.json({
                status: 'false',
                message:'Error setting profile'
            })
        }else{
            res.json({
                status: 'true',
                data:results,
                message:'Profile successfully set'
            })
        }
    });

});


router.post('/getprofile', function(req, res, next) {

    var email= req.body.email;

    connection.query('SELECT * FROM users_profile WHERE email = ?',[email], function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.json({
                status: 'false',
                message: 'Error occured'
            })
        }else{
            console.log(results);
            if(results.length >0){
                res.json({
                    status: 'true',
                    email: results[0].email,
                    name: results[0].name,
                    phone: results[0].phone,
                    aboutme: results[0].aboutme,
                    skills: results[0].skills

                })
            }
            else{
                res.json({
                    status: 'false',
                    message: 'User not available'
                });
            }
        }
    });

});

router.post('/updatename', function(req, res, next) {

    var email= req.body.email;
    var name= req.body.name;
    var phone = req.body.phone;
    var aboutme = req.body.about;
    var skills = req.body.skills;


    connection.query('UPDATE users_profile SET name = ? WHERE email = ?', [name, email], function (error, results, fields) {
        if (error) {
            res.json({
                status: 'false',
                message: 'update failed'
            })
        }

        else{
            res.json({
                status: 'true',
                message: 'update successful'
            })
        }

    });


});


router.post('/updatephone', function(req, res, next) {

    var email= req.body.email;
    var name= req.body.name;
    var phone = req.body.phone;
    var aboutme = req.body.about;
    var skills = req.body.skills;


    connection.query('UPDATE users_profile SET phone = ? WHERE email = ?', [phone, email], function (error, results, fields) {
        if (error) {
            res.json({
                status: 'false',
                message: 'update failed'
            })
        }

        else{
            res.json({
                status: 'true',
                message: 'update successful'
            })
        }

    });


});

router.post('/updateskills', function(req, res, next) {

    var email= req.body.email;
    var name= req.body.name;
    var phone = req.body.phone;
    var aboutme = req.body.about;
    var skills = req.body.skills;


    connection.query('UPDATE users_profile SET skills = ? WHERE email = ?', [skills, email], function (error, results, fields) {
        if (error) {
            res.json({
                status: 'false',
                message: 'update failed'
            })
        }

        else{
            res.json({
                status: 'true',
                message: 'update successful'
            })
        }

    });


});

router.post('/updateabout', function(req, res, next) {

    var email= req.body.email;
    var name= req.body.name;
    var phone = req.body.phone;
    var aboutme = req.body.about;
    var skills = req.body.skills;


    connection.query('UPDATE users_profile SET aboutme = ? WHERE email = ?', [aboutme, email], function (error, results, fields) {
        if (error) {
            res.json({
                status: 'false',
                message: 'update failed'
            })
        }

        else{
            res.json({
                status: 'true',
                message: 'update successful'
            })
        }

    });


});

module.exports = router;
