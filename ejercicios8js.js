// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

function sortNumbers(array) {
    if (!Array.isArray(array)) return null
    else {
        obj = {
            ascendancy: [],
            descendant: []
        }
        ascendancy = array.filter((array) => {if (typeof array === "number") return array})
        ascendancy2 = ascendancy.sort((a, b) => {return a - b})
        obj.ascendancy = ascendancy2
        descendant = array.filter((array) => {if (typeof array === "number") return array})
        descendant2 = descendant.sort((a, b) => {return b - a})
        obj.descendant = descendant2
        return obj
    }
}

// console.log(sortNumbers([7, 5,7,8,6, [], "f"]))
// console.log(sortNumbers([1, "xd", 2, [], 3, {}, 4, false, 5, function xd(){}, 6]))
// console.log(sortNumbers("[1, 2, 3]"))

function duplicateDelete(array) {
    if (!Array.isArray(array)) return null
    else {
        const filter = array.filter((array2, index) => {
            return array.indexOf(array2) === index
        })
        return filter
    }
} 

// console.log(duplicateDelete(["x", 10, "x", 2, "10", 10, true, true]))
// console.log(duplicateDelete(["xd", "xd", false, true, false, "a", "a"])) 
// console.log(duplicateDelete({array: ["xd", true, 23]}))

function averageValue(array) {
    if (!Array.isArray(array)) return null
    else {
        let total = 0
        array.map((array) => {
            total += array
        })
        return Math.round(total / array.length) 
    }
}

console.log(averageValue([9,8,7,6,5,4,3,2,1,0]))
console.log(averageValue([20, 77, 32, 15, 7, 4, 10]))
console.log(averageValue({a: [10, 20, 30 ,40]}))