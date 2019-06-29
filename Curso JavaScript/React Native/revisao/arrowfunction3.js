let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global); // Nesse aspecto o this é global

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);