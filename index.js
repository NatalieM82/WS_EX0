var http = require('http');
var player = require('./player');

var logs ="";

var p = new player();

//Callback functions
function displayScore() {
	var temp = "Player's score: " + this.score;
	logs += temp + "\n";
	console.log(temp);
}

function checkUnderZero() {
	if (this.score <= 0 ) {
		var temp = "Player's score is below 0!!! " + this.score ;
		logs += temp + "\n";
		console.log(temp);
	}
}

p.on("ScoreChanged", displayScore);
p.on("ScoreChanged", checkUnderZero);



p.add(3);
p.add(6);
p.add(2); //11
p.remove(4);
p.remove(3);
p.remove(5);

var cbServer =  function (req,res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	
	res.end(logs);
};

var server = http.createServer(cbServer);

server.listen(3000);
console.log("listening on 3000!");
