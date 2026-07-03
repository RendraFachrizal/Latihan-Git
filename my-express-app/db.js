const mysql = require("mysql")
const connectionPool = mysql.createPool({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'db_movies'
})
connectionPool.getConnection(function(err){
    if(err) {
        throw err
    }
})

module.exports = {
    connectionPool
}