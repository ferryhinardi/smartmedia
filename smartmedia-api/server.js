const Hapi = require('hapi');
const routes = require('./routes');

const server = new Hapi.Server();

server.connection({
	port: process.env.PORT || 5001,
	labels: 'api',
});

server.register({
	register: routes,
}, {
	routes: {
		prefix: '/v1',
	},
}, (err) => {
	if (err) {
		console.error('Failed to load routes:', err);
	}
});

server.decorate('reply', 'success', function (data) {
	return this.response(data).code(200);
});

server.decorate('reply', 'fail', function (message) {
	return this.response(message).code(400);
});

server.start(() => {
	console.log('Server running at:', server.info.uri);
});
