const expressJWT = require('express-jwt')
const { ErrorHanddler } = require('../modelClass/ErrorHanddler')

const isRevoked = async (req,payload,done) =>{
    if (!payload.isAdmin) {
        done(null,true)
    } else {
        done()
    }
}

const authJwt = () => {

    const secreto = process.env.JWT_SECRET | 'secreto'
    const api = process.env.API_URL
    return expressJWT({
        secreto,
        algorithms: ['HS512'],
        isRevoked :isRevoked
    }).unless({
        path:[
            {
                url:`${api}/usuario` ,
                methods:['GET']
            },
            {
                url:`${api}/usuario/login` ,
                methods:['POST']
            }
        ]
    })

}

module.exports = authJwt