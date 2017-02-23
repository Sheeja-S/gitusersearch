

var apiKey = require('./../.env').apiKey;

Gitapp = function() {};

Gitapp.prototype.getGitInfo = function(user, displayFunction) {
    $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response) {
        console.log(response);
        displayFunction(user, response);
    }).fail(function(error) {
        console.log(error.responseJSON.message);
        $('.showUserName').text("User " + user + " is " + error.responseJSON.message);
        $('.showCreationDate').text(" ");
        $('.showUserEmail').text(" ");
        $("#showUserImage").text(" ");
    });
};

exports.githubModule = Gitapp;
