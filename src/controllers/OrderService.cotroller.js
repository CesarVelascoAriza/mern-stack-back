const { listaDeOrdenes, obtenerOrden, guardarOrden } = require("../services/Orden.services")


const getAll = async (req, res) => {
    try {
        const all = await listaDeOrdenes()
        if(!all)
            res.status(204)
        res.send(all)
    } catch (error) {
        console.error("Error ->", error)
        res.status(500).json(error)
    }
}
const getid = async (req, res) => {
    try {
        let {params} = req
        console.log(params)
        const respuesta  = await obtenerOrden(params.id)
        res.send(respuesta)
    } catch (error) {
        console.error("Error ->", error)
        res.status(500).json(error)
    }
}
const create = async (req, res) => {
    try {
        let {body} = req
        const respuesta = await guardarOrden(body)
        res.send(respuesta)
    } catch (error) {
        console.error("Error ->", error)
        res.status(500).json(error)
    }
}
const update = async (req, res) => {
    try {

    } catch (error) {

    }
}
const delet = async (req, res) => {
    try {

    } catch (error) {

    }
}


module.exports= {
    getAll,
    getid,
    create,
    update,
    delet
} 
