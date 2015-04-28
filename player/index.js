var events = require('events');
var util = require('util');
util.inherits(Player, events.EventEmitter);

//Player object constractor
function Player () {
	this.score = 0;
	events.EventEmitter.call(this);
}

//Player object prototypes
Player.prototype.add = function (amount) {
	this.score += amount;
	this.emit("ScoreChanged");
};

Player.prototype.remove = function (amount) {
	this.score -= amount;
	this.emit("ScoreChanged");
};

// exports.add = Player.prototype.add;
// exports.remove = Player.prototype.remove;

var player = new Player();






module.exports = Player;