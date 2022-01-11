const {createReadStream} = require('fs');

// const stream = createReadStream('./content/big.txt')

//const stream = createReadStream('./content/big.txt', {highWaterMark: 90000}) passing a flag indicating the size of each buffers.
//const stream = createReadStream('./content/big.txt', {encoding:'utf8'})
const stream = createReadStream('./content/big.txt')
stream.on('data', function(result){
    console.log(result)
})

stream.on('error',(result)=>{
    console.log(result)
})