const fileSystem = require("fs");
//asynchronous

//write file
/*fileSystem.writeFile("demo1.txt", "this is only testing text", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});*/

//update file
/*fileSystem.appendFile("demo1.txt", " to adding another text", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});*/

//readfile
/*
fileSystem.readFile("demo1.txt", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });*/

//rename
/*
fileSystem.rename("demo1.txt", "demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
}); */

//delete
/*fileSystem.unlink("demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});*/


