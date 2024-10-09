class GameScreen extends Screen {
	constructor(app) {
		super(app);
	}

	init() {
		this.controls = new GameControls();

		// todo: load map and game objects (hero, npcs etc) from config;

		// layer of map game objects would appear above
		this.mapBottom = null;
		// layer of map game objects would be below
		this.mapTop = null;

		this.player = new Player({ x: 100, y: 100 });
	}

	update() {}

	draw(c, ctx) {
		ctx.fillStyle = 'white';
		this.player &&
			ctx.fillRect(this.player.position.x, this.player.position.y, 100, 50);
	}
}
