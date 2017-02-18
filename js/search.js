

var Gitapp = function() {};

Gitapp.prototype.getGitInfo = function(user) {

   return $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey);
};

exports.githubModule = Gitapp;
