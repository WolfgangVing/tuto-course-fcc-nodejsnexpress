//const {readFile, writeFile} = require('fs')

const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        console.log(res.statusCode)
        res.end('Welcome to my short story');
    }
    if(req.url === '/about') {
        console.log(res.statusCode)
        res.end('Here is my short story');
    }
    //res.write('Hello, World!');
    //res.end()
})

server.listen(5000)