const {Router} = require("express");
const { getAll, guardarCategoria, getIdCategoria, acturalizarCategoria, deleteById } = require("../controllers/Categoria.controller");
const route  = Router()
/**
 * categorias 
 * los metodos de categorias 
 */
route.get("/",getAll);
route.get("/:id",getIdCategoria);
route.post("/",guardarCategoria)
route.put('/:id',acturalizarCategoria)
route.delete('/:id',deleteById)
//console.log("productos, ",route)
module.exports = {route};
//export default route