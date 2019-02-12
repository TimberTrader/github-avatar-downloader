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

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    result.forEach( result => {
      console.log("Result:", result.avatar_url);
    })
  });

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")