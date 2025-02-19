const http = require("http");
const fs = require("node:fs/promises");
const server = http.createServer(async(req, res) => {
    const url = req.url;
    if(url=="/home" && req.method=="GET"){
        const home = await fs.readFile("home.html","utf-8");
        res.write(home);
    }else if(url == "/about" && req.method== "GET"){
        const about = await fs.readFile("about.html","utf-8");
        res.write(about);
    }else{
        res.write("<h1>This is Not A valid API</h1>");

    }
    res.end();
})

server.listen(3001, (error) => {
    try {
        if (error) throw err;
        console.log("Server is Runnign on port:3001");

    } catch (err) {
        console.log("Server Error:", err.message)
    }

});