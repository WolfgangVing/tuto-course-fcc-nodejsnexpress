const http = require('http')

const server = http.createServer();//the create server will be automaticaly added to 'request' events

//just like EventEmitter methods .on() , server does also have on method.
server.on('request', (req, res) => {
    console.log(`${req.method}: ${res.statusCode}`)
    res.end('Welcome')
})
 
server.listen(5000)