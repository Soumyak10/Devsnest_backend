const fs = require("fs");

var command = process.argv[2];
var path = process.argv[3];
var third_val = process.argv[4];

console.log(command);
console.log(path);
console.log(third_val);

switch (command) {
  case "mkdir":
    fs.mkdir(path);
    break;

  case "readfile":
    console.log(fs.readFile(path, "utf-8"));
    break;

  case "writefile":
    fs.writeFile(path, third_val);
    break;

  case "rename":
    fs.rename(path, third_val);
    break;

  case "append":
    fs.appendFile(path, third_val);
    break;

  case "unlink":
    fs.unlink(path);
    break;

  case "rmdir":
    fs.rmdir(path);
    break;
}
