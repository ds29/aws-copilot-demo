var http = require('http');

http.createServer(function (req, res) {
  res.write('Marketing Works!');
  res.end();
  console.log(`${new Date().toISOString()} [marketing] GET / 200`)
}).listen(3002);
