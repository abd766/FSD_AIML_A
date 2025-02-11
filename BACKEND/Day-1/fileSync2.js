const {myReadFile, myWriteFile, username} = require("./fileSync1");
myReadFile();
const data = "helllow"
myWriteFile(data);
myReadFile();
console.log("Username:",username);