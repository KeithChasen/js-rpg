class Application {
	constructor() {
		this.screen = null;
	}

	switchScreen(screen) {
		if (this.screen && this.screen.cleanUp) {
			this.screen.cleanUp();
		}

		if (screen === 'menu') {
			this.screen = new MenuScreen(this);
		}

		if (screen === 'game') {
			this.screen = new GameScreen(this);
		}

		this.screen.init();
	}

	update() {
		this.screen && this.screen.update();
	}

	draw(c, ctx) {
		this.screen && this.screen.draw(c, ctx);
	}
}
