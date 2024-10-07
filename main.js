console.log('game');

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const application = new Application();
application.switchScreen('menu');

const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	application.run(canvas, ctx);

	requestAnimationFrame(animate);
};

animate();

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});
