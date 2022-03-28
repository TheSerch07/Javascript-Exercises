// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function randomNumber () {
    return Math.round(Math.random() * (600 - 501) + 501)
}

// console.log(randomNumber())
// console.log(randomNumber())
// console.log(randomNumber())
// console.log(randomNumber())
// console.log(randomNumber())

function capicuaNumber (number) {
    if (typeof number !== "number") return null
    else {
        stringNumber = number.toString()
        reverseNumber = parseInt(stringNumber.split("").reverse().join(""))
        if (reverseNumber === number) return true
        else return false 
    }
}

// console.log(capicuaNumber("500"))
// console.log(capicuaNumber(202))
// console.log(capicuaNumber(2002))
// console.log(capicuaNumber(2003))

function factorialNumber (number) {
    if (typeof number !== "number") return null
    if (number === 1 || number === 0) return 1
    return number * factorialNumber(number - 1)
}

// console.log(factorialNumber(5))
// console.log(factorialNumber(7))
// console.log(factorialNumber("10"))