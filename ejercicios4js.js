// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function primeNumber(number) {
    if (typeof number !== "number" || number === 0 || number === 1) return null
    else {
        for (let i=2; i<number/2; i++) {
            if (number % i === 0) return false 
        }
        return true
    }
}

// console.log(primeNumber(7))
// console.log(primeNumber(2))
// console.log(primeNumber(5))
// console.log(primeNumber(17))
// console.log(primeNumber(6))
// console.log(primeNumber(1))
// console.log(primeNumber(0))
// console.log(primeNumber("7"))

function oddOrEvenNumber(number) {
    if (typeof number !== "number") return null
    else if (number % 2 === 0) return "Es par"
    else return "Es impar"
}

// console.log(oddOrEvenNumber(2))
// console.log(oddOrEvenNumber(7))
// console.log(oddOrEvenNumber(5))
// console.log(oddOrEvenNumber(6))
// console.log(oddOrEvenNumber("20"))

function celciusToFahrenheit(degrees, type) {
    if (typeof degrees !== "number" || typeof type !== "string") return null
    else if (type === "C") return (degrees * 9/5) + 32 + "°F"
    else return (degrees - 32) * 5/9 + "°C"
}

// console.log(celciusToFahrenheit(0, "C"))
// console.log(celciusToFahrenheit(32, "F"))
// console.log(celciusToFahrenheit("105", "C"))
// console.log(celciusToFahrenheit(105, {5:5}))
// console.log(celciusToFahrenheit(105, "C"))