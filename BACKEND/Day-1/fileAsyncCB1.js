const fs = require("fs");
function myReadFile() {
    try {
        fs.readFile("dummy.txt", "utf-8", (err, data) => {
            if (err) {
                throw err;
            }
            console.log("File data:", data);

        });
    } catch (err) {
        console.log("File Read Error:", err.message);
    }
}
function myWriteFile(){
    // const data ="abdullah";
    try{
        fs.writeFile("dummy.txt",data,(err)=>{
            if(err)
            throw err;
        });
    }
    catch(err){
        console.log("File Write Error:",err.message);
    }
}
myReadFile();
myWriteFile();
myReadFile();