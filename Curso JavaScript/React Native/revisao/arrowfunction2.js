function Pessoal() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoal

//Função Arrow não faz o This variar