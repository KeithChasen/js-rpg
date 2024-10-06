class Screen {
	constructor() {
		this.controls = null;
	}

	cleanUp() {
		if (this.controls && this.controls.cleanUp) {
			this.controls.cleanUp();
		}
	}
}
