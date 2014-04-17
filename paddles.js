function Paddle() {
	Entity.call(this)

	this.width = 20
	this.height = 100

	this.x = 20
	this.y = game.height / 2 - this.height

}

Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor = Paddle

Paddle.prototype.update = function() {
	Entity.prototype.update.apply(this, arguments)

	this.y = Math.min(Math.max(this.y, 0), game.height - this.height)


}

function Player() {
	Paddle.call(this)

		this.x = 20


}

Player.prototype = Object.create(Paddle.prototype)
Player.prototype.constructor = Player

Player.prototype.update = function () {
	var speed = 15

	if (game.keyPressed.up) {
		this.yVelocity = -speed
	} else if (game.keyPressed.down) {
		this.yVelocity = speed
	} else {
		this.yVelocity = 0
	}

	Paddle.prototype.update.apply(this, arguments)
}