const express = require('express')
const bodyParser = require('body-parser')
const aluno = require('./routes/aluno')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use('/aluno', aluno)

server.get('/', (request, response) => {
    response.send('Hello World')
})

server.listen(3333, () => {
    console.log('Servidor está funcionando!')
})