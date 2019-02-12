var request = require('request');

function getRepoContributors(repoOwner, repoNme, cb) {

}

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });