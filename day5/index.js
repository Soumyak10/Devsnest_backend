const fs = require("fs");

var command = process.argv[2];
var path = process.argv[3];
var third_val = process.argv[4];

console.log(command);
console.log(path);
console.log(third_val);

switch (command) {
  case "mkdir":
    fs.mkdirSync(path);
    break;

  case "readfile":
    console.log(fs.readFileSync(path, "utf-8"));
    break;

  case "writefile":
    fs.writeFileSync(path, third_val);
    break;

  case "rename":
    fs.renameSync(path, third_val);
    break;

  case "unlink":
    fs.unlinkSync(path);
    break;

  case "rmdir":
    fs.rmdirSync(path);
    break;
}
