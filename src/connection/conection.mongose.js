const mongose = require("mongoose")

const user = process.env.USERNAME 
const pass = process.env.PASSWORD
mongose.connect(process.env.CADENA_CONEXION).then(()=>{
    console.log("connection is ready")
}).catch((error)=>{
    console.error("connection is no ready" , error)
})


module.exports = {mongose}