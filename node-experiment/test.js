var filesYo = require('fs');
var https = require('https');

filesYo.writeFile(__dirname + "/index.html", "<h1>HTML rocks</h1>");

var octoUrl = "https://i.ytimg.com/vi/L-3oLTGZqNg/maxresdefault.jpg";
var octoFile = filesYo.createWriteStream(__dirname + "/node-octo.jpg");
var request = https.get(octoUrl, function(response) {
	response.pipe(octoFile);
});