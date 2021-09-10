const fs = require('fs')

fs.readFile('./assets/golden.jpeg', (erro, buffer) => {
    console.log('imagem foi bufferizada')
    console.log(buffer)
})