const {getAllCategorias,getByIdCategorias,saveCategoria,UpdateCategorias,deleteCategorias} = require("../services/Categoria.service")

const getAll = async (req, res) => {
    try {
        console.log("getalll")
        const all = await getAllCategorias()
        if(!all){
            res.status(204)
        }
        res.send(all)
    } catch (error) {
        console.error("Error ->", error)
        res.status(500).json(error)
    }
}
const getIdCategoria = async (req, res) => {
    try {
        console.log("getId")
        const { params } = req
        console.log(params)
        const categoria = await getByIdCategorias(params.id);
        if(!categoria){
            res.status(204).json({"Objeto": "no encontrado "})
        }
        res.send(categoria)
    } catch (error) {
        console.error("Error ->", error)
        res.status(500).json(error)
    }
}
const guardarCategoria = async (req, res) => {
    try {
        console.log("guardar")
        const {body} = req
        console.log(body)
        const categoria = await saveCategoria(body)
        res.send(categoria)
    } catch (error) {
        console.error("Error ->", error)
        res.status(500).json(error)
    }
}
const acturalizarCategoria = async (req, res) => {
    try {
        const {params}  = req
        const {body} = req
        console.log("actualizar")
        console.log(body + params)
        const response = await UpdateCategorias(params.id ,body);
        res.send(response)
    } catch (error) {
        console.error("Error ->", error)
        res.status(500).json(error)
    }
}
const deleteById= async (req, res) => {
    try {
        const {params}  = req
        const eliminado  = await deleteCategorias(params.id)
        res.send(eliminado)
    } catch (error) {
        console.error("Error ->", error)
        res.status(500).json(error)
    }
}

module.exports = {
    getAll,
    getIdCategoria,
    guardarCategoria,
    acturalizarCategoria,
    deleteById
}

/**
 * 
 * 
 * 
 *  
 */