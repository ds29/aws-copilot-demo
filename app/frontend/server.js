var http = require('http');

http.createServer(function (req, res) {
  res.write('Frontend Works!');
  res.end();
  console.log(`${new Date().toISOString()} [frontend] GET / 200`)
}).listen(3001);
