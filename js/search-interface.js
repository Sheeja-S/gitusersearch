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

   //display the data nicely
   var arr = [];

});
