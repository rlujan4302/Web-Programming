//vanilla node server
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

console.log(`1: Trying to start server...`);

server.listen(PORT, () => {
    console.log(`2: Server is running at http://localhost:3000`);
});
console.log(`3: End of file, waiting for requests...`);