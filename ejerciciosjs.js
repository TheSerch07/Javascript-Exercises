// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function lengthOfString(string) {
    if (typeof string !== "string") return null;
    else return string.length; 
}

const obj = {
    name: "Fernando"
}

// console.log(lengthOfString("Hola, mundo"))
// console.log(lengthOfString("Serch"))
// console.log(lengthOfString(5))
// console.log(lengthOfString(obj))

function cutString(string, cut) {
    if (typeof string !== "string" || typeof cut !== "number") return null;
    else return string.slice(0, -cut)
}

// console.log(cutString("Hola", 2))
// console.log(cutString("Serch, el mejor programador", 11))
// console.log(cutString(obj, 2))
// console.log(cutString("buenas", obj))

function separatedString(string, separator) {
    if (typeof string !== "string" || typeof separator !== "string") return null;
    else return string.split(separator);
}

// console.log(separatedString("Hola que tal", " "))
// console.log(separatedString("Maluma Beibi", " "))
// console.log(separatedString("Hola que tal", obj))
// console.log(separatedString(obj, " "))

function repeatedString(string, repetitions) {
    if(typeof string !== "string" || typeof repetitions !== "number") return null;
    else return string.repeat(repetitions);
}

// console.log(repeatedString("Serch", 7))
// console.log(repeatedString("a", 5))
// console.log(repeatedString(obj, 7))
// console.log(repeatedString("Serch", obj))