const express = require('express')
const fs = require('fs')

const app = express()

const pessoa = {
    id: 871286346182634,
    name: 'Geraldo Domingos',
    phoneNumber: 81727372823
}

app.get('/', (request, response) => {

    fs.readFile('./public/index.html', 'utf8', (err, data) => {
        if (!err) {

            data = data.replace('Nome', `Nome: ${pessoa.name}`)
                .replace('numero', `Numero: ${pessoa.phoneNumber}`)


            response.send(data)
        }
    })

})


app.listen(3333, () => {
    console.log('Server Runnig On Port 3333')
})