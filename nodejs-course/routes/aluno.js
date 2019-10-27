const express = require('express')
const router = express.Router()

const alunos = [
    { id: 0, aluno0: 'nome0' },
    { id: 1, aluno1: 'nome1' },
    { id: 2, aluno2: 'nome2' },
    { id: 3, aluno3: 'nome3' }
]

router.get('/', (request, response, next) => {
    console.log(request.body)

    const aluno = alunos[request.body.id]
    if (aluno) {
        response.json(aluno)
    } else {
        next()
    }
})

router.get('/', (request, response, next) => {
    console.log(request.query)

    const aluno = alunos[request.query.id]
    if (aluno) {
        response.json(aluno)
    } else {
        response.send('Aluno não encontrado!')
    }
})

router.get('/all', (request, response) => {
    response.json(JSON.stringify(alunos))
})

router.get('/:id', (request, response) => {
    console.log(request.params)
    const aluno = alunos[request.params.id]
    response.json(aluno)
})

module.exports = router