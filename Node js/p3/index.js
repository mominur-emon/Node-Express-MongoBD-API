//os, path

const openSource = require("os");

// console.log(openSource.userInfo());
// console.log(openSource.homedir());
// console.log(openSource.hostname());
// console.log(openSource.totalmem());
// console.log(openSource.freemem());

const Path = require("path");

// const extensionName = Path.extname("index.html");
// console.log(extensionName);

const joinName = Path.join(__dirname + "/views");
console.log(joinName);
