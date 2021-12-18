//const {readFile, writeFile} = require('fs')

const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        console.log(`${res.statusCode} ${req.method}`)
        res.end(`${req.headers}`);
    }
    if(req.url === '/about') {
        console.log(res.statusCode)
        res.end('Here is my short story');
    }
    //res.write('Hello, World!');
    //res.end()
})

server.listen(5000)