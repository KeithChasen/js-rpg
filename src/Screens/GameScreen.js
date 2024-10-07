class GameScreen extends Screen {
	constructor(app) {
		super(app);
		this.controls = new GameControls();
	}

	update() {}

	draw(c, ctx) {
		// just hard coded stuff to check transition to game screen
		ctx.fillStyle = 'white';
		ctx.fillRect(c.width / 4, c.height / 2, c.width / 2, c.height / 10);

		ctx.fillStyle = 'red';
		ctx.font = `${c.height / 35}px Georgia`;
		ctx.fillText('GAME', c.width / 4 + c.width / 10, c.height / 2 + 50);
	}
}
