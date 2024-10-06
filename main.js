console.log('game');

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const application = new Application();
application.switchScreen('menu');

const animate = () => {
	application.run();

	requestAnimationFrame(animate);
};

// animate();
