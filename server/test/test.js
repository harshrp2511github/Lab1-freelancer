var assert = require('assert');
var request = require('request');
var http = require("http");
var express = require('express')

describe('Positive SignIn Test', function() {

    it('should signIn with correct username and password as parameters', function (done) {
        request.post('http://localhost:3001/users/login', {
            form: {
                email: 'root@root.com',
                password: 'root12345',
                credentials: true
            }
        }, function (error, response, body) {
            console.log(response);
            assert.equal(201, response.statusCode);
            done();
        });
    });


});