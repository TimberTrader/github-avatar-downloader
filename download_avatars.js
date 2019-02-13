const request = require('request');
const token = require('./secrets')
const fs = require('fs')
const cont = process.argv.slice(2)

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
    
function downloadImageByURL(url, filePath) {
  request.get(url)
    .on('error', function (err) {
      throw err; 
    })
    .on('response', function (response) {
      console.log(`Response Status Code: ${response.statusCode}\nStatus Message: ${response.statusMessage}\nResponse Headers: ${response.headers['content-type']}`)
    })
    .pipe(fs.createWriteStream(filePath))
  }

getRepoContributors(contributor[0], contributor[1], function(err, result) {
    let conList = JSON.parse(result);ver
    result.forEach( result => {
          downloadImageByURL(conList[i].avatar_url, './avatars/' + conList[i].login + '.jpg')
    }
  })