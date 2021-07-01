var http = require('http');

http.createServer(function (req, res) {
  res.write('API Works!');
  res.end();
  console.log(`${new Date().toISOString()} [api] GET /api 200`)
}).listen(3000);
