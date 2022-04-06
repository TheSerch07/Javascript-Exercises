// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function findWords(string) {
    if (typeof string !== "string") return null
    else {
        const string2 = string.toLowerCase().split("")
        let vowel = 0
        let consonant = 0
        string2.map((string) => {if (/[aeiou]/.test(string))
        return vowel ++
        if (/[bcdefghjklmnpqrstvwxyz]/.test(string)) return consonant ++
    })
    return "Vocales:" + vowel + ", " + "Consonantes:" + consonant  
    }
}


// console.log(findWords("Buenas"))
// console.log(findWords("Amo a los gatos"))
// console.log(findWords(524))
// console.log(findWords("Hola Mundo"))

function validName(name) {
    if (typeof name !== "string") return null
}
