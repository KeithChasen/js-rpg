class MenuControls extends Controls {
	constructor() {
		super();

		this.addListener('keydown', this.handleKeyDown);
		this.addListener('keyup', this.handleKeyUp);
	}

	handleKeyDown(event) {
		console.log(event, 'Menu Controls Key Down');
	}

	handleKeyUp(event) {
		console.log(event, 'Menu Controls Key Up');
	}
}
