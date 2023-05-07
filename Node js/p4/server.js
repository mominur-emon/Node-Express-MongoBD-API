//server need to stop press ctrl+c

/*const http = require("http");

// http
//   .createServer((req, res) => {
//     res.end("hello its test server");
//   })
//   .listen(3000);

const myServer = http.createServer((req, res) => {
  res.end("hello its test server");
});

myServer.listen(3000, () => {
  console.log("server is running successfully at localhost 3000");
});*/

const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("<h1>hello test server runnig here </h1>");
});

myServer.listen(port, hostname, () => {
  console.log(`server is running successfully at http://${hostname}:${port}`);
});
