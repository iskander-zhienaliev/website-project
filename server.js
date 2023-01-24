const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

const port = 3050;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
