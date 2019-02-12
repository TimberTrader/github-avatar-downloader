const request = require('request');
const token = require('./secrets')

function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
        url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
        headers: {
          'User-Agent': 'request',
          'Authorization': `token ${token.GITHUB_TOKEN}`
        }
      };
  
    request(options, function(err, res, body) {
      cb(err, JSON.parse(body));
      });
     
    }
    

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    result.forEach( result => {
      console.log("Result:", result.avatar_url);
    })
  });