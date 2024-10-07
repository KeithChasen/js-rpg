class MenuControls extends Controls {
	constructor() {
		super();

		this.controls = {
			up: false,
			down: false,
		};

		this.addListener('keydown', this.handleKeyDown);
		this.addListener('keyup', this.handleKeyUp);
	}

	dropControls() {
		this.controls = {
			up: false,
			down: false,
		};
	}

	handleKeyDown(event) {
		if (event.code === 'ArrowUp') {
			this.controls.up = true;
		}

		if (event.code === 'ArrowDown') {
			this.controls.down = true;
		}
	}

	handleKeyUp(event) {
		if (event.key === 'ArrowUp' && this.controls.up) {
			this.controls.up = false;
		}
		if (event.key === 'ArrowDown' && this.controls.down) {
			this.controls.down = false;
		}
	}
}
