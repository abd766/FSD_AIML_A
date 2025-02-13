const fs = require("fs/promises");
async function myReadFile(){
    try{
        const res = await fs.readFile("dummy.txt","utf-8");
        console.log("File Data:",res)
    }catch(err){
        console.log("File Reading Error:",err.message);
    }
}
const myWriteFile = async (data) => {
    try{
        const res = await fs.writeFile("dummy.txt", data);
        console.log("File Written Successfully.")
    }catch(err){
        console.log("Write Error:",err.message);
    }
}
myReadFile();
// setTimeout(()=>{},5000);
myWriteFile("this is new write n");
// myReadFile();