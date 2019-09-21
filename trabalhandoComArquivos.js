let fs = require("fs")

/*
    Criar e escrever arquivo

fs.writeFile("teste.txt", "Hello World", function (error) {

    if (error) { throw error }
    console.log("Arquivo Criado com Sucesso!")

})

    Atualiza e sobescreve arquivo

fs.appendFile("teste.txt", " - Olá Mundo", function (error) {

    if (error) { throw error }
    console.log("Arquivo Atualizado com Sucesso!")

})

    Apaga um arquivo

fs.unlink("teste.txt", function (error) {

    if (error) { throw error }
    console.log("Arquivo Apagado com Sucesso!")

})

    Renomear arquivo

fs.rename("teste.txt", " Renomeado.txt", function (error) {

    if (error) { throw error }
    console.log("Arquivo renomeado com Sucesso!")

})

    Lendo um arquivo

fs.readFile(" Renomeado.txt", "UTF8", function (error, data) {

    if (error) {
        throw error
    }
    console.log(data)

})

*/

let args = process.argv.slice(2)

let fileName = args[0]

fs.readFile(fileName, "UTF8", (error, data) => {

    if (error) throw error
    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error) => {
        if (error) throw error
        console.log("Arquivo gerado com sucesso!")
    })
})

