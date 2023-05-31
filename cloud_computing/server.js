const Hapi = require('hapi');
const cors = require('hapi-cors');
const routes = require('./routes');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
});

async function startServer() {
  try {
    await server.register(cors);
    server.route(routes);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
  } catch (err) {
    console.error('Error starting server:', err.message);
  }
}

startServer();
