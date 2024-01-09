const express  = require("express")
const route  = express.Router()
const {guardarProducto,encontrarTodos, encotarPorId, actualizar, eliminar, cantidadProductos, isFeaturedProductos}  = require("../controllers/products.controller");
/**
 * 
 */
route.get("/",encontrarTodos);
route.get('/:id',encotarPorId)
route.post("/",guardarProducto)
route.put('/:id',actualizar)
route.delete('/:id',eliminar)
route.get("/count",cantidadProductos)
route.get("/    ",isFeaturedProductos)
//console.log("productos, ",route)
module.exports = {route};
//export default route