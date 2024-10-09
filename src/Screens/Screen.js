class Screen {
	constructor(app) {
		this.controls = null;
		this.app = app;
	}

	init() {}

	cleanUp() {
		if (this.controls && this.controls.cleanUp) {
			this.controls.cleanUp();
		}
	}

	update() {}

	draw() {}
}
