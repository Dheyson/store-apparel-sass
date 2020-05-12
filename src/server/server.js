const livereload = require('livereload');
const connect = require('connect');
const static = require('serve-static');

const server = connect();
const lrserver = livereload.createServer();

server.use(static(__dirname + '../index.html'));

server.listen(3000);

lrserver.watch(__dirname + "/build");
