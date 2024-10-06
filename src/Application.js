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

	run() {
		console.log(`Application run`);
	}
}
