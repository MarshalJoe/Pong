var Game = function (canvas) {
	var self = this;

	this.context - canvas.getContext("2d");
	this.width = canvas.width;
	this.height = canvas.height

	this.keyPressed = {}

	$(canvas).on('keydown keyup', function(e){
		
		//convert key code to key name

		var keyName = Game.keys[e.which]

		if (keyName) {
			self.keyPressed[keyName] = e.type === "keydown";
			e.preventDefault();
		}
	})
}

Game.keys = {
	32:'space',
	37:'left',
	38:'up',
	39: 'right',
	40: 'down'
}

Game.prototype.start = function () {
	
}