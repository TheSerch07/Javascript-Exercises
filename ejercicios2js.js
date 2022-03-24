// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

function reverseString (string) {
    if(typeof string !== "string") return null
    else return string.split("").reverse().join("")
}

const obj = {
    name: "Serch",
    lastname: "Uchiha"
}

// console.log(reverseString("Maluma"))
// console.log(reverseString(obj))

function repeatWords (string, word) {
    if (typeof string !== "string" || typeof word !== "string") return null
    else {
        const string2 = string.split(" ")
        let count = 0
        string2.map((string2) => {if (string2 === word) return count++})
        return count
    }
}

// console.log(repeatWords("Buenas tardes gente gente ", "gente"))
// console.log(repeatWords("Buenas tardes gente gente ", "tardes"))

function palindroWords (string) {
    if (typeof string !== "string") return null
    else {
        let reverseString = string.split("").reverse().join("")
        if (reverseString === string) return true 
        else return false
    }
}

// console.log(palindroWords("oso"))
// console.log(palindroWords("hola"))
// console.log(palindroWords("arenera"))

function deletePattern (string, pattern) {
    if (typeof string !== "string" || typeof pattern !== "string") return null
    else {
        let replacedString = string.replace(new RegExp(pattern, "ig"), "")
        return replacedString
    }
}

// console.log(deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))
// console.log(deletePattern("xd1, xd2, xd3, xd4 y xd5", "xd"))