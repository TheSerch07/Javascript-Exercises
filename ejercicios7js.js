// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

function squaredNumbers(array) {
    if (!Array.isArray(array)) return null
    else {
        let squeared = []
        array.map((array) => {
            return squeared.push(Math.pow(array, 2))
        })
        return squeared
    }
}

// console.log(squaredNumbers([1, 4, 5]))
// console.log(squaredNumbers([5, 6, 7]))
// console.log(squaredNumbers("ss"))

function higherAndLowerNumbers(array) {
    if (!Array.isArray(array)) return null
    else { 
        let higherandLower = []
        let min = Math.min.apply(null, array)
        let max = Math.max.apply(null, array)
        higherandLower.push(max)
        higherandLower.push(min)
        return higherandLower
    }
}

// console.log(higherAndLowerNumbers([1, 4, 5, 99, -60]))
// console.log(higherAndLowerNumbers([100, -4, 777, 99, -7]))
// console.log(higherAndLowerNumbers([1, 4, 5, -59, 0]))

function oddOrEvenNumberObj(array) {
    if (!Array.isArray(array)) return null
    else {
        obj = {
            par: [],
            impar: []
        }
        array.map((array) => {
            if (typeof array !== "number") return null
            if (array % 2 === 0) obj.par.push(array)
            else obj.impar.push(array)
        })
        return obj
    }
}

// console.log(oddOrEvenNumberObj([70, 28, 51, 63, 784, 99, 10, 15, 7, 4]))
// console.log(oddOrEvenNumberObj([1, 2, 3, 4, 5, 6, 7, 8, 9, "xd", 10, [], 11, {}, 12]))
// console.log(oddOrEvenNumberObj({numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, "xd", 10, [], 11, {}, 12]}))
