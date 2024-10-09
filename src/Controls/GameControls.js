class GameControls extends Controls {
	constructor() {
		super();
		this.controls = {
			up: false,
			down: false,
			left: false,
			right: false,
		};

		this.addListener('keydown', this.handleKeyDown);
		this.addListener('keyup', this.handleKeyUp);
	}

	handleKeyDown(event) {
		if (event.key === 'w') this.controls.up = true;
		if (event.key === 'a') this.controls.left = true;
		if (event.key === 's') this.controls.down = true;
		if (event.key === 'd') this.controls.right = true;
	}

	handleKeyUp(event) {
		if (event.key === 'w') this.controls.up = false;
		if (event.key === 'a') this.controls.left = false;
		if (event.key === 's') this.controls.down = false;
		if (event.key === 'd') this.controls.right = false;
	}
}
