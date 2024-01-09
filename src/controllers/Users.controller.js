const { getById, getAll, save, update, deleteuser, loginUser } = require("../services/User.service")



const encontrarTodos = async (req, res)=>{
    try {
        const response = await getAll()
        res.send(response)
    } catch (error) {
        console.error("Eerror ", error)
        rs.status(500).json(error)
    }
}
const encontrarPorID = async (req, res)=>{
    try {
        const {params} = req
        const resp = await getById(params.id)
        res.send(resp)
    } catch (error) {
        console.error("Eerror ", error)
        rs.status(500).json(error)
    }
}
const actualizar = async (req, res)=>{
    try {
        const {body} = req
        const {params} = req
        const response = await update(params.id,body)
        res.send(response)
    } catch (error) {
        console.error("Eerror ", error)

        rs.status(500).json(error)
    }
}
const eliminarPorId = async (req, res)=>{

    try {
        const {params} = req
        const eliminate = await deleteuser(params.id)
        res.send(eliminate)
    } catch (error) {
        console.error("Eerror ", error)

        rs.status(500).json(error)
    }
}
const guardar = async (req, res)=>{

    try {
        const {body} = req
        const response = await save(body)
        res.send(response)
    } catch (error) {
        console.error("Eerror ", error)

        rs.status(500).json(error)
    }
}
const login = async  (req, res)=>{
    try {
        const {body} = req
        const response  = await loginUser(body)
        res.send(response)
    } catch (error) {
        console.error("Eerror ", error)
        rs.status(500).json(error)
    }
}

module.exports ={
    encontrarTodos,
    encontrarPorID,
    actualizar,
    eliminarPorId,
    guardar,
    login
}