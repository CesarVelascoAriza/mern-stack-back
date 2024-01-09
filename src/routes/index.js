const express = require("express")
require("dotenv/config")
const fs = require("fs")

const api =process.env.API_URL || "api"
const PHAT_ROUTER = `${__dirname}`;

const router = express.Router();


const cleanFileName = (fileName) => {
    const file = fileName.split('.').shift()
    return file
}

fs.readdirSync(PHAT_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index') {
        import(`./${cleanName}.js`).then((moduleRouter)=>{
            console.log(`se esta cargando la ruta /${cleanName}`);
           // console.log("index",moduleRouter.route)
            router.use(`${api}/${cleanName}`,moduleRouter.route)
        })
       // router.use(`/${cleanName}`)
    }
});

module.exports = router;