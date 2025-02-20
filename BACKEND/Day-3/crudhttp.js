const http = require("http");
const port = 3001;
const data = [{
    id: 1,
    name:"Abd",
    email:"abd@gamil.com"
}]
const server = http.createServer((req,res)=>{
    
    const url = req.url;
    if(url=="/users" && req.method=="GET"){
        res.writeHead(200,{"content-type":"application/json"});
        res.write(JSON.stringify(data));
    }
    else if(url=="/users" && req.method=="POST"){
        let body = ""
        req.on("data",(chunk)=>{
            body += chunk;
        })
        req.on("end",()=>{
            const parsedBody = JSON.parse(body);
            const {name, email} = parsedBody;
            const newId = data.length > 0 ? (data[data.length-1].id+1) : 1;
            data.push({
                id: newId,
                name,
                email
            });
            res.writeHead(201,{"Content-type": "application/json"});
            res.write(JSON.stringify({status:success,message: "Your data is stored"}))
        })
    }
    else{
        res.writeHead(404,{"content-type":"application/json"});
        res.write(JSON.stringify({status:"fail", message: "Page not found"}))
    }
    res.end();
})

server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log("Server is runnning on port:",port);
    }catch(err){
        console.log("Error Message:",err.message);
    }
})