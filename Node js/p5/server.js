const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/plain" }); 
  res.write("hello ");
  res.end();
});

myServer.listen(port, hostname, () => {
  console.log(`server is running successfully at http://${hostname}:${port}`);
});
