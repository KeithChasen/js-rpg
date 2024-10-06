class Controls {
	constructor() {
		this.eventListeners = [];
	}

	addListener(event, handler) {
		const boundHandler = handler.bind(this);
		addEventListener(event, boundHandler);
		this.eventListeners.push({
			event,
			boundHandler,
		});
	}

	cleanup() {
		this.eventListeners.forEach(({ event, handler }) => {
			removeEventListener(event, handler);
		});
		this.eventListeners = [];
	}
}
