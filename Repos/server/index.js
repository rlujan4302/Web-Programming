// express.js
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req,res) => {
  res.end('Hello World\n');
});

console.log(`1: Trying to start server...`);

app.listen(PORT, () => {
    console.log(`2: Server is running at http://localhost:${PORT}`);
});
console.log(`3: End of file, waiting for requests...`);