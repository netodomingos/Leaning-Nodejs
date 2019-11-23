const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    app.render(user)
})


app.listen(3333, () => {
    console.log('Server Runnig On Port 3333')
})