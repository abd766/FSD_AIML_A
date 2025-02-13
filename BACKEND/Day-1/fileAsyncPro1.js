const fs = require("fs/promises");
function myReadFile(){
    try{
        const res = fs.readFile("dummy.txt","utf-8");
        res.then((data) => {
            console.log("File Data:",data);
        })
        .catch((err) => {
            throw err;
        })
    }catch(err){
        console.log("File Reading Error:",err.message);
    }
}
const myWriteFile = (data) => {
    try{
        const res = fs.writeFile("dummy.txt", data);
        res.then(()=>{
            console.log("File Writing done sucessfully");
        })
        .catch((err) => {
            throw err;
        })
    }catch(err){
        console.log("Write Error:",err.message);
    }
}
myReadFile();
// setTimeout(()=>{},5000);
myWriteFile("this is new write n");
// myReadFile();