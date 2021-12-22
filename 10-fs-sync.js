//This is an synchronous approch to the modules 'fs'
const {readFileSync, writeFileSync} = require('fs');
// const fs = require("fs") importing all module and assigning to a variabel fs;

const first = readFileSync('./content/first.txt', "utf8")
const second = readFileSync('./content/second.txt', "utf8")

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, (err, result)=> {
        if(err) {
            console.log(err)
            return
        }
        console.log(result)
    })
//writeFileSync can be used to create logs

