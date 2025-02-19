const http = require("http");
// const server = require("node:fs/promises")

const server = http.createServer(async(req, res) => {
    const url = req.url;
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    const data = await fetch('https://api.github.com/search/users?q=location: "Ghaziabad"');
    const dataJson = await data.json();
    const newData = dataJson.items;
    const login = newData.map((item)=>{
        return item.login;
    })
    res.write(JSON.stringify(login));
    res.end();
})

server.listen(3001, (err) => {
    try {
        if (err) throw err;
        console.log("Server is Running on port:3001")
    } catch (err) {
        console.log(err.message);
    }
})