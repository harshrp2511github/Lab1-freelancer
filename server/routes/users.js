var express = require('express');
var router = express.Router();
//var multer = require('multer');
var connection = require('./database/db');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {

    var email= req.body.email;
    var password = req.body.password;
    connection.getConnection(function(err, connection) {
        connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
            connection.release();
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                console.log(results);
                if (results.length > 0) {
                    if (results[0].password == password) {
                        req.session.email = email;
                        res.json({
                            status: 'true',
                            message: 'login sucessfull'
                        });
                    }
                    else {
                        res.send({
                            status: 'false',
                            message: 'Email and password does not match'
                        });
                    }
                }
                else {
                    res.send({
                        status: 'false',
                        message: 'Email does not exits'
                    });
                }
            }
        });
    });
});



router.post('/signup', function(req, res, next) {

    var users={

        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password
    }

    connection.getConnection(function(err, connection) {
        connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
            connection.release();
            if (error) {
                res.json({
                    status: 'false',
                    message: 'Email already exists'
                })
            } else {
                res.json({
                    status: 'true',
                    data: results,
                    message: 'user registered sucessfully'
                })
            }
        });
    });
});

router.post('/setprofile', function(req, res, next) {

    var users_profile={

        "email":req.body.email
    }

    connection.getConnection(function(err, connection) {
        connection.query('INSERT INTO users_profile SET ?', users_profile, function (error, results, fields) {
            connection.release();
            if (error) {
                res.json({
                    status: 'false',
                    message: 'Error setting profile'
                })
            } else {
                res.json({
                    status: 'true',
                    data: results,
                    message: 'Profile successfully set'
                })
            }
        });
    });
});


router.post('/getprofile', function(req, res, next) {

    var email= req.body.email;
    connection.getConnection(function(err, connection) {
        connection.query('SELECT * FROM users_profile WHERE email = ?', [email], function (error, results, fields) {
            connection.release();
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                console.log(results);
                if (results.length > 0) {
                    res.json({
                        status: 'true',
                        email: results[0].email,
                        name: results[0].name,
                        phone: results[0].phone,
                        aboutme: results[0].aboutme,
                        skills: results[0].skills,
                        profileimage: results[0].profileimage

                    })
                }
                else {
                    res.json({
                        status: 'false',
                        message: 'User not available'
                    });
                }
            }
        });
    });
});


router.post('/getusername', function(req, res, next) {

    var email= req.body.email;
    connection.getConnection(function(err, connection) {
        connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
            connection.release();
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                console.log(results);
                if (results.length > 0) {
                    res.json({
                        status: 'true',
                        username: results[0].username

                    })
                }
                else {
                    res.json({
                        status: 'false',
                        message: 'User not available'
                    });
                }
            }
        });
    });
});

router.post('/updatename', function(req, res, next) {

    var email= req.body.email;
    var name= req.body.name;
    var phone = req.body.phone;
    var aboutme = req.body.about;
    var skills = req.body.skills;

    connection.getConnection(function(err, connection) {
        connection.query('UPDATE users_profile SET name = ? WHERE email = ?', [name, email], function (error, results, fields) {

            if (error) {
                res.json({
                    status: 'false',
                    message: 'update failed'
                })
            }

            else {
                res.json({
                    status: 'true',
                    message: 'update successful'
                })
            }
            connection.release();

        });

    });
});


router.post('/updatephone', function(req, res, next) {

    var email= req.body.email;
    var name= req.body.name;
    var phone = req.body.phone;
    var aboutme = req.body.about;
    var skills = req.body.skills;

    connection.getConnection(function(err, connection) {
        connection.query('UPDATE users_profile SET phone = ? WHERE email = ?', [phone, email], function (error, results, fields) {

            if (error) {
                res.json({
                    status: 'false',
                    message: 'update failed'
                })
            }

            else {
                res.json({
                    status: 'true',
                    message: 'update successful'
                })
            }
            connection.release();

        });
    });

});

router.post('/updateskills', function(req, res, next) {

    var email= req.body.email;
    var name= req.body.name;
    var phone = req.body.phone;
    var aboutme = req.body.about;
    var skills = req.body.skills;

    connection.getConnection(function(err, connection) {
        connection.query('UPDATE users_profile SET skills = ? WHERE email = ?', [skills, email], function (error, results, fields) {

            if (error) {
                res.json({
                    status: 'false',
                    message: 'update failed'
                })
            }

            else {
                res.json({
                    status: 'true',
                    message: 'update successful'
                })
            }
            connection.release();

        });

    });
});

router.post('/updateabout', function(req, res, next) {

    var email= req.body.email;
    var name= req.body.name;
    var phone = req.body.phone;
    var aboutme = req.body.about;
    var skills = req.body.skills;

    connection.getConnection(function(err, connection) {
        connection.query('UPDATE users_profile SET aboutme = ? WHERE email = ?', [aboutme, email], function (error, results, fields) {

            if (error) {
                res.json({
                    status: 'false',
                    message: 'update failed'
                })
            }

            else {
                res.json({
                    status: 'true',
                    message: 'update successful'
                })
            }
            connection.release();

        });

    });
});

router.post('/uploadimage', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            return
        }

        // Everything went fine
    })
});


router.post('/postproject', function(req, res, next) {

    var projects={

        "projectname":req.body.projectname,
        "email":req.body.email,
        "name": req.body.name,
        "projectdesc":req.body.projectdesc,
        "projectskills": req.body.projectskills,
        "projectmin": req.body.projectmin,
        "projectmax": req.body.projectmax,
        "projectopen": req.body.projectopen,
        "projectbids": req.body.projectbids

    }

    connection.getConnection(function(err, connection) {
        connection.query('INSERT INTO projects SET ?', projects, function (error, results, fields) {
            connection.release();
            if (error) {
                res.json({
                    status: 'false',
                    message: 'Project Name already Exists..'
                })
            } else {
                res.json({
                    status: 'true',
                    data: results,
                    message: 'Project successfully added '
                })
            }
        });
    });

});


router.post('/dohire', function(req, res, next) {

    var projectname = req.body.projectname;
    var winnername = req.body.name;


    connection.getConnection(function(err, connection) {
        connection.query('UPDATE projects SET winnername = ? WHERE projectname = ? ', [winnername, projectname], function (error, results, fields) {
            connection.release();
            if (error) {
                res.json({
                    status: 'false',
                    message: 'Error'
                })
            } else {
                res.json({
                    status: 'true',
                    message: 'Successful '
                })
            }
        });
    });
});

router.post('/closeproject', function(req, res, next) {

    var projectname = req.body.projectname;



    connection.getConnection(function(err, connection) {
        connection.query('UPDATE projects SET projectopen = "no" WHERE projectname = ? ', projectname, function (error, results, fields) {
            connection.release();
            if (error) {
                res.json({
                    status: 'false',
                    message: 'Error'
                })
            } else {
                res.json({
                    status: 'true',
                    message: 'Successful '
                })
            }
        });
    });
});


router.post('/addbid', function(req, res, next) {

    var bids={

        "projectname":req.body.projectname,
        "biddingparty":req.body.biddingparty,
        "name": req.body.name,
        "price":req.body.price,
        "days": req.body.days

    }

    connection.getConnection(function(err, connection) {
        connection.query('INSERT INTO bids SET ?', bids, function (error, results, fields) {
            connection.release();
            if (error) {
                res.json({
                    status: 'false',
                    message: 'You have already made a bid on this project'
                })
            } else {
                res.json({
                    status: 'true',
                    data: results,
                    message: 'Bid successfully added '
                })
            }
        });
    });
});




router.get('/getprojectlist', function(req, res, next) {


    connection.getConnection(function(err, connection) {
        connection.query('SELECT * FROM projects ', function (error, results, fields) {
            connection.release();
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                res.json({
                    status: 'true',
                    results: results
                });
            }

        })
    });
});

router.post('/getmyprojectlist', function(req, res, next) {

    var email = req.body.email;
    connection.getConnection(function(err, connection) {
        connection.query('SELECT * FROM projects WHERE email = ? ', email, function (error, results, fields) {
            connection.release();
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                res.json({
                    status: 'true',
                    results: results
                });
            }

        })
    });
});

router.post('/getmybiddedprojectlist', function(req, res, next) {

    var email = req.body.email;

    connection.getConnection(function(err, connection) {
        connection.query('SELECT * FROM bids INNER JOIN projects ON bids.projectname = projects.projectname WHERE bids.biddingparty  = ? ', email, function (error, results, fields) {
            connection.release();
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                res.json({
                    status: 'true',
                    results: results

                });
            }

        })
    });
});



router.post('/getbids', function(req, res, next) {

    var projectname = req.body.projectname;
    connection.getConnection(function(err, connection) {
        connection.query('SELECT * FROM bids WHERE projectname = ? ', projectname, function (error, results, fields) {
            connection.release();
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                res.json({
                    status: 'true',
                    results: results
                });
            }

        })
    });
});

router.get('/checklogin', function(req, res, next){
    //req.session.email = null;
    //req.session.destroy();
    if(req.session.email){
        res.json({
            status: 'true'
        });
    }
    else{
        res.json({
            status: 'false'
        });
    }
});

router.get('/logout', function(req, res, next){
    req.session.email = null;
    req.session.destroy();
    if(req.session.email == null){
        res.json({
            status: 'true'
        });
    }
    else{
        res.json({
            status: 'false'
        });
    }
});

router.post('/updatebidcount', function(req, res, next){
    var projectname = req.body.projectname;
    connection.getConnection(function(err, connection) {
        connection.query('UPDATE projects SET projectbids = projectbids+1 WHERE projectname = ? ', projectname, function (error, results, fields) {
            connection.release();
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                res.json({
                    status: 'true',
                    message: 'Bid count updated'
                });
            }

        })
    });
});

router.post('/updateavg', function(req, res, next){
    var projectname = req.body.projectname;
    connection.getConnection(function(err, connection) {
        connection.query('UPDATE projects SET projectavg = (SELECT AVG(price) FROM bids where projectname = ? ) where projectname = ? ', [projectname, projectname], function (error, results, fields) {
            connection.release();
            if (error) {
                // console.log("error ocurred",error);
                res.json({
                    status: 'false',
                    message: 'Error occured'
                })
            } else {
                res.json({
                    status: 'true',
                    message: 'Bid avg updated'
                });
            }

        })
    });
});


module.exports = router;
