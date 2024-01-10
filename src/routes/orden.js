const {Router} = require("express")
const { encontrarTodos, encontrarPorID, guardar, actualizar, login, eliminarPorId } = require("../controllers/Users.controller")
const route = Router()

/**
 * usuarios 
 */

route.get('/',encontrarTodos)
route.get('/:id',encontrarPorID)
route.post('/',guardar)
route.post('/login',login)
route.put('/:id',actualizar)
route.delete('/:id',eliminarPorId)


module.exports ={route}