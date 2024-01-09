const express = require("express")
const router = require("./routes")
const morgan = require("morgan")
require("dotenv/config")
const app = express();
const authJwt = require('./helpers/helperJWT')

const port = process.env.PORT||3000
const api =process.env.API_URL || "api"

app.use(express.json());
app.use(morgan('tiny'))

app.use(authJwt)
app.use((err,req,res,next) =>{
    if (err) {
        res.status(403).json({message : err})
    } else {
        next()
    }
})

app.use(router)



app.listen(port,()=>{
    console.log(api)
    console.log(`el servidor esta funcionando en el puerto http://localhost:${port} `)
})