var path = require('path');
var express = require('express')

module.exports = function (app) {


    app.get('/home', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    })


    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'))
    })

//Sends user to home page if no specific path is chosen

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    })
}