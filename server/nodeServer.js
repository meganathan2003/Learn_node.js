/**
 * Below the code for creating the server
 * using node so we need to import the http
 * and listen the port and start the live sever
 * using node we can create the server like back-end
 *
 * @import(http)
 * @import(fs) File system
 * @import(path) find the path in the file systemc
 */
const http = require('node:http');
const fs = require('node:fs'); 
const path = require('node:path');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('Page not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is Running " + port);
  }
});
