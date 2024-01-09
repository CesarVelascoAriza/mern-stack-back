const { guardarProductoService, getallProductosService, getProductoFindById, updateProducto, deleteById, countProducts, isFeatured } = require("../services/productos.services")

const guardarProducto = async (req, rs) => {
    try {
        const { body } = req
        console.log(body)
        const respuesta = await guardarProductoService(body);
        rs.status(201).json(respuesta);
    } catch (error) {
        console.error("Eerror ", error)
        rs.status(500).json(error)
    }
}

const encontrarTodos = async (req, res) => {
    try {
        const resp = await getallProductosService();
        res.send(resp);
    } catch (error) {
        console.error("Eerror ", error)

        rs.status(500).json(error)
    }
}

const encotarPorId = async (req,res)=>{
    try {
        const {params} = req
        const resp = await getProductoFindById(params.id)
        res.send(resp)
    } catch (error) {
        console.error("Eerror ", error)
        rs.status(500).json(error)
    }
}
const actualizar = async(req,res)=>{
    try {
        const {params} = req
        const {body} = req
        const resp = await updateProducto(params.id,body)
        res.send(resp)
    } catch (error) {
        console.error("Eerror ", error)
        rs.status(500).json(error)
    }
}

const eliminar = async(req,res)=>{
    try {
        const {params} = req
        const resp = await deleteById(params.id)
        res.send(resp)
    } catch (error) {
        console.error("Eerror ", error)
        rs.status(500).json(error)
    }
}
const cantidadProductos = async (req,res)=>{
    try {
        const resp = await countProducts()
        res.status(200).json({catidad:resp})
    } catch (error) {
        console.error("Eerror ", error)
        res.status(500).json(error)
    }
}
const isFeaturedProductos = async (req,res)=>{
    try {
        const resp = await isFeatured()
        res.status(200).json({catidad:resp})
    } catch (error) {
        console.error("Eerror ", error)
        res.status(500).json(error)
    }
}

module.exports = {
    guardarProducto,
    encontrarTodos,
    encotarPorId,
    actualizar,
    eliminar,
    cantidadProductos,
    isFeaturedProductos
}