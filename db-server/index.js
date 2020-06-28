const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = 3030;

server.use(middlewares);
server.use(router);
server.listen(port, function () {
    console.log('JSON server listening on port '+port)
});