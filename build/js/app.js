(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "e32d1a3dbf78c66bf9e65205a3a2f1c47e08b575"

},{}],2:[function(require,module,exports){


var Gitapp = function() {};

Gitapp.prototype.getGitInfo = function(user) {

   return $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey);
};

exports.githubModule = Gitapp;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

var Gitapp = require('./../js/search.js').githubModule;

var displayResponse = function(response){
  console.log(response);
};

$(document).ready(function() {
   var currentGitObject = new Gitapp();
   $('#userNameBtn').click(function(event) {
       var user = $('#username').val();
       $('#username').val("");
       console.log(user);

       $.get('https://api.github.com/users/' + user + '/repos' + '?access_token=' + apiKey).then(function(response) {
           console.log(response);
       }).fail(function(error) {
           console.log(error.responseJSON.message);
           $('.showuser').text(error.responseJSON.message);
       });


   });
});

},{"./../.env":1,"./../js/search.js":2}]},{},[3]);
