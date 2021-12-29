//If a handler that is processing req/res have synchronous code inside, this will block new request/response until the synchronous code is fulfilled;
// If not handled with care, this will lead to lag in retrieve or send data.
const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.end('Home Page')
    }
    if(req.url === '/about') {
        // BLOCKING CODE !!!
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Me')
    }
    //res.end("Error Page") // somewhat is not fully operating, it shouldn't go here since the connection should be shut off
})
server.listen(5000, ()=> {
    console.log('Server listening on port 5000')
})