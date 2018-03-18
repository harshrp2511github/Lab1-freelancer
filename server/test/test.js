var assert = require('assert');
var request = require('request');
var http = require("http");
var express = require('express')

describe('Positive Login Test', function() {

    it('user should login with correct username and password', function (done) {
        request.post('http://localhost:3001/users/login', {
            form: {
                email: 'root@root.com',
                password: 'root12345',
                credentials: true
            }
        }, function (error, response, body) {
            console.log(response.statusCode);
            assert.equal(201, response.statusCode);
            done();
        });
    });
});

describe('Negative Login Test', function() {

    it('user should not be able to login with incorrect username and password', function (done) {
        request.post('http://localhost:3001/users/login', {
            form: {
                email: 'root@root.com',
                password: 'root',
                credentials: true
            }
        }, function (error, response, body) {
            console.log(response.statusCode);
            assert.equal(401, response.statusCode);
            done();
        });
    });
});

// describe('Positive Signup Test', function() {
//
//     it('user should  be able to signup with unique email, and valid username and password', function (done) {
//         request.post('http://localhost:3001/users/signup', {
//             form: {
//                 email: 'root3@root3.com',
//                 username: 'root1',
//                 password: 'root1.12345',
//                 credentials: true
//             }
//         }, function (error, response, body) {
//             console.log(response.statusCode);
//             assert.equal(201, response.statusCode);
//             done();
//         });
//     });
// });

describe('Negative Signup Test', function() {

    it('user should  not be able to signup with Existing email, or invalid (username and password)', function (done) {
        request.post('http://localhost:3001/users/signup', {
            form: {
                email: 'root@root.com',
                username: 'root1',
                password: 'root1.12345',
                credentials: true
            }
        }, function (error, response, body) {
            console.log(response.statusCode);
            assert.equal(401, response.statusCode);
            done();
        });
    });
});

describe('Positive Placebid Test', function() {

    it('user should be able to bid on a project he has not already bid on', function (done) {
        request.post('http://localhost:3001/users/addbid', {
            form: {
                projectname:'Website2',
                biddingparty:'rt@rt.com',
                name: 'Rachel',
                price: 300,
                days: 7,
                credentials: true
            }
        }, function (error, response, body) {
            console.log(response.statusCode);
            assert.equal(201, response.statusCode);
            done();
        });
    });
});

describe('Negative Placebid Test', function() {

    it('user should not be able to bid on a project he has  already bid on', function (done) {
        request.post('http://localhost:3001/users/addbid', {
            form: {
                projectname:'Website2',
                biddingparty:'rt@rt.com',
                name: 'Rachel',
                price: 300,
                days: 7,
                credentials: true
            }
        }, function (error, response, body) {
            console.log(response.statusCode);
            assert.equal(401, response.statusCode);
            done();
        });
    });
});

describe('Positive get My Posted Projects  Test', function() {

    it('user should be able to get list of all projects he has posted', function (done) {
        request.post('http://localhost:3001/users/getmyprojectlist', {
            form: {
                email: 'root@root.com',
                credentials: true
            }
        }, function (error, response, body) {
            console.log(response.statusCode);
            assert.equal(201, response.statusCode);
            done();
        });
    });
});

describe('Positive get My Posted Projects  Test', function() {

    it('user should be able to get list of all projects he has posted', function (done) {
        request.post('http://localhost:3001/users/getmyprojectlist', {
            form: {
                email: 'root@root.com',
                credentials: true
            }
        }, function (error, response, body) {
            console.log(response.statusCode);
            assert.equal(201, response.statusCode);
            done();
        });
    });
});

describe('Positive get Bids on Projects  Test', function() {

    it('user should be able to get list of all bids on the project', function (done) {
        request.post('http://localhost:3001/users/getbids', {
            form: {
                projectname: 'Website2',
                credentials: true
            }
        }, function (error, response, body) {
            console.log(response.statusCode);
            assert.equal(201, response.statusCode);
            done();
        });
    });
});


