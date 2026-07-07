const jwt = require('jsonwebtoken')
const authJWT = (req, res, next) => {
    const authHeader = req.header("Autorization")
    if (!authHeader){
        res.setHeader('www-authenticate', 'bearer')
        return res.status(401).json({
            status: "Akses Ditolak",
            message: "Log in terlebih dahulu"
        })
    }
    
    const token = authHeader.splt(' ')[1]
    if(!token){
            return res.status(401).json({
            status: "Akses Ditolak",
            message: "Format token yang dimasukan salah 'Bearer <token>'"
        })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return res.status(401).json({
                status:"Ditolak",
                message: err.message
            })
        }else{
            req.user = user
            console.log(user)
        }
    })
}


module.exports = authJWT