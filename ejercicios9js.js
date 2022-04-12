// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
    constructor ({iMDB, title, director, relaseYear, countries, gender, classification}) {
        
        this.validateIMDB(iMDB)
        this.validateTitle(title)
        this.validateDirector(director)
        this.validateRelaseYear(relaseYear)
        this.validateCountries(countries)
        this.validateGender(gender)
        this.validateClassification(classification)

        this.iMDB = iMDB
        this.title = title
        this.director = director
        this.relaseYear = relaseYear
        this.countries = countries
        this.gender = gender
        this.classification = classification

    }

    static genders() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    fichaTecnica() {
        console.log({"IMDB": this.iMDB,
            "Title": this.title,
            "Director": this.director,
            "RelaseYear": this.relaseYear,
            "Countries": this.countries,
            "Gender": this.gender,
            "Classification": this.classification})
    }
        
    
    validateString(value) {
        if (!value) throw console.error("Ingresa un texto!")
        if (typeof value !== "string") throw console.error("Tienes que enviar un texto!")
        return true
    }

    validateNumber(value) {
        if (!value) throw console.error("Ingresa un número!")
        if (typeof value !== "number") throw console.error("Tienes que ingresar un número!")
        return true
    }

    validateArray(value) {
        if (!value) throw console.error("Ingresa un array!")
        if (!Array.isArray(value)) throw console.error("Tienes que ingresar un array!")
        if (value.length === 0) throw console.error("Tienes que ingresar datos!")
        return true
    }

    validateIMDB(iMDB) {
        // const validate = /^([A-Z]){2}([0-9]){7}$/
        if (this.validateString(iMDB)) 
        if (!(/^([A-Z]){2}([0-9]){7}$/.test(iMDB))) throw console.error("IMDB no valido!")
    }

    validateTitle(title) {
        if (this.validateString(title))
        if (title.length > 100) throw console.error("El titulo supera los 100 caracteres!")
    }

    validateDirector(director) {
        if (this.validateString(director))
        if (director.length > 50) throw console.error("El nombre del director supera los 50 caracteres!")
    }

    validateRelaseYear(relaseYear) {
        if (this.validateNumber(relaseYear))
        if (!(Number.isInteger(relaseYear))) throw console.error("El año de estreno tiene que ser un número entero!")
        let rYear = relaseYear.toString().length
        if (rYear > 4) throw console.error("El año de estreno tiene mas de 4 digitos!")
    }

    validateCountries(countries) {
        if (this.validateArray(countries))
        if ((countries.filter((array) => {if (typeof array !== "string") return array})).length > 0) throw console.error("Solo puedes enviar datos tipo string en el array!")
    }

    validateGender(gender) {
        if (this.validateArray(gender))
        var gendersXd = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
        if ((gender.filter((ele) => {if (!gendersXd.includes(ele)) {return ele}})).length > 0) throw console.error("Ingresa uno de los generos validos. Para verlos utiliza el comando 'Peliculas.genders()'")
    }

    validateClassification(classification) {
        if (this.validateNumber(classification))
        if (classification < 0 || classification > 10) throw console.error("La calificación debe ser en 1 y 10!")
    }
}

const peli = new Pelicula({iMDB: "AB7894561", title: "Avengers", director: "Hermanos Russo", relaseYear: 2019, countries: ["USA", "Colombia"], gender: [ "Action", "Adventure", "Family"], classification: 9.5})
// const peli2 = new Pelicula("A78945612", "hola", "hola", "hola", "hola", "hola", "hola")

console.log(peli)

const aPelis = [{iMDB: "SY1510216", title: "ADMV", director: "Sergio García", relaseYear: 2022, countries: ["Colombia"], gender: ["Adult", "Drama", "Romance"], classification: 9.8}, 
{iMDB: "CG2604218", title: "Consen Movie", director: "Steven Spielberg", relaseYear: 2022, countries: ["USA", "Colombia"], gender: ["Biography", "Drama", "Animation"], classification: 9.9}, 
{iMDB: "SG0702201", title: "Serch", director: "Martin Scorsese", relaseYear: 2022, countries: ["USA", "Colombia"], gender: ["Biography", "Drama", "Animation"], classification: 9.9}]
// console.log(peli2)
const lPelis = aPelis.forEach(liP => new Pelicula(liP).fichaTecnica())


// console.log(Pelicula.genders())