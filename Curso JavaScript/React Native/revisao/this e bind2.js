function pessoa() {
    this.idade = 0

    const self = this; // Self obriga a apontar pra pessoa
    setInterval(function () {
        self.idade++
        console.log(self.idade);    
    },1000)
}

new pessoa