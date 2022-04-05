// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function binaryToDecimal(number, base) {
    if (typeof number !== "number" || typeof base !== "number") return null
    else return parseInt(number, base)
}

// console.log(binaryToDecimal(100, 2))
// console.log(binaryToDecimal(110011, 2))
// console.log(binaryToDecimal("1001", 2))
// console.log(binaryToDecimal(100110, "2"))

function discount(base, discount) {
    if (typeof base !== "number" || typeof discount !== "number") return null
    else return base - base * (discount / 100)
}

// console.log(discount(188900, 20))
// console.log(discount(1000, 90))
// console.log(discount("500", 35))
// console.log(discount(2500, "25"))
// console.log(new Date(2000, 2, 7))

function countYears(date) {
    if(!(date instanceof Date)) return null
    else {
        const actuallyYear = new Date()
        const year = new Date(date)
        return actuallyYear.getFullYear() - year.getFullYear() + " años"
    }
}

// console.log(countYears(new Date(2000, 2, 7)))
// console.log(countYears(new Date(1985, 4, 23)))
// console.log(countYears(2000, 2, 7))