class Screen {
	constructor(app) {
		this.controls = null;
		this.app = app;
	}

	cleanUp() {
		if (this.controls && this.controls.cleanUp) {
			this.controls.cleanUp();
		}
	}

	update() {}

	draw() {}
}
