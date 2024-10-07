class MenuScreen extends Screen {
	constructor() {
		super();
		this.controls = new MenuControls();

		this.menus = [
			{
				id: 1,
				text: 'New Game',
				selected: true,
			},
			{
				id: 2,
				text: 'Save Game',
				selected: false,
			},
			{
				id: 3,
				text: 'Load Game',
				selected: false,
			},
		];
	}

	draw(c, ctx) {
		ctx.fillStyle = 'white';

		for (let i in this.menus) {
			// todo: optimize it
			// make it almost const:
			// set it in constructor and make possible to change upon resize
			const div =
				this.menus[i].id === 1
					? 6
					: this.menus[i].id === 2
					? 2
					: this.menus[i].id === 3
					? 3
					: 6;
			ctx.fillStyle = 'white';

			// start horizontal point: 1/4 of width
			// start vertical point height/divider
			// width: half width of screen
			// height: 1/10 of height
			ctx.fillRect(c.width / 4, c.height / div, c.width / 2, c.height / 10);

			ctx.font = `${c.height / 35}px Georgia`;
			ctx.fillStyle = 'red';
			// start horizontal 1/4 of width + 1/10 of width
			// start vertical: height/divider + 1/18 of height which is almost twice as small as the height of rect item, to put text in the middle
			ctx.fillText(
				this.menus[i].text,
				c.width / 4 + c.width / 10,
				c.height / div + c.height / 18
			);
		}
	}
}
