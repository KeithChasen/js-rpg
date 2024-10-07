class Application {
	constructor() {
		this.screen = null;
	}

	switchScreen(screen) {
		if (screen === 'menu') {
			this.screen = new MenuScreen();
		}

		if (screen === 'game') {
			this.screen = new GameScreen();
		}
	}

	run(c, ctx) {
		// console.log(`Application run`);

		this.screen.draw(c, ctx);
	}
}
