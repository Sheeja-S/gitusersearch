var Gitapp = require('./../js/gitapp.js').githubModule;

var displayGitInfo = function(user, userGitInfo) {
    $('.showUserName').text("Full Name of " + user + " is " + userGitInfo.name);
    $('.showCreationDate').text("The account was created on " + moment(userGitInfo.created_at).format("MMM Do YYYY"));
    $("#showUserImage").html("<img src="+ userGitInfo.avatar_url + "height='300' width='300' >");
    $('.showUserEmail').text("Email Address of " + user + " is " + userGitInfo.email);

};

$(document).ready(function() {
    var currentGitObject = new Gitapp();
    $('#userNameBtn').click(function() {
        var user = $('#username').val();
        $('#username').val("");
        currentGitObject.getGitInfo(user, displayGitInfo);
    });
});
