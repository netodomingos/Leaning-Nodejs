let calc = require("./calc")

let args = process.argv.slice(2)

let a = Number(args[1])
let b = Number(args[2])
let r = ""

if (args[0] == 's') {
    r = calc.soma(a, b)
}
else if (args[0] == 'm') {
    r = calc.mult(a, b)
}
else {
    r = 'Opção Ínvalida!'
}

console.log(r)



