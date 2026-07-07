let movies = [
    {id: 1, title: "Spider-Man", year: 2002},
    {id: 2, title: "John Wick", year: 2014},
    {id: 3, title: "The Avengers", year: 2012},
    {id: 4, title: "Logan", year: 2017},
]

const getMovie = (req, res) => {
    let {title} = req.query
    console.log(title)
    if(title == undefined){
        title = ""
    }
    let result = ""
    movies.forEach((item,index) => {
        if(item.title.toLowerCase().includes(title.toLowerCase())){
            result += `<H1> ${index+1}. ${item.title}. Tahun Rilis : ${item.year} </H1>`
        }
    })
    res.send(result)
}

const getMovieById = (req, res) => {
    let {id} = req.params
    let result = movies.find((item) => {
        return item.id === Number(id)
    })
    res.send(result.title)
}


//Middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`Method: ${req.method}`)
    console.log(`URL: ${req.url}`)
    next()
}


const tokenMiddleware = (req, res, next) => {
    let {token} = req.query
    if (token === "12345") {
        next()
    } else {
        res.status(401).json({
            message: "Token tidak valid"
        })
    }
}


const yearMiddleware = (req, res, next) => {
    let {year} = req.query
    if (year !== undefined) {
        if(isNaN(Number(year))) {
            return res.status(400).json({message: "Tahun tidak ditemukan"})
        }
        console.log(`Filter by year: ${year}`)
    }
    next()
}

const timeMiddleware = (req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
};

const checkIdMoviesMiddleware = (req, res, next) => {
    let{id} = req.params
    let result = movies.find(item => item.id === Number(id))
    if (result) {
        next()
    } else {
        res.status(404).json({message: "Movies tidak ditemukan"})
    }
}


const getMovieApi = (req, res) => {
    let {title,year} = req.query
    let result = movies.filter((item) => {
        let match = true
        if (title) {
            match = match && item.title.toLowerCase().includes(title.toLowerCase())
        }
        if (year) {
            match = match && item.year === Number(year)
        }
        return match
    })
    res.json(result)
}

const getMovieByIdApi = (req, res) => {
    let {id} = req.params
    let result = movies.find((item) => {
        return item.id === Number(id)
    })
    res.json(result)
}


module.exports = 
{
    getMovie, 
    getMovieById, 
    loggerMiddleware, 
    tokenMiddleware, 
    yearMiddleware, 
    timeMiddleware, 
    checkIdMoviesMiddleware, 
    getMovieApi, 
    getMovieByIdApi
}