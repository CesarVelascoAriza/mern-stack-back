const { Categoria } = require("../models/Categorias.schema")

const getAllCategorias = async () => {

    console.log("categorias")
    const resp = await Categoria.find()
   return resp
}

const getByIdCategorias = async (id) => {
    console.log("categorias")
    const resp = await Categoria.findById(id)
    return resp
}
const saveCategoria = async (body) => {
    console.info("Categoria," ,body)
    const categoria = new Categoria({
        name : body.name,
        icon : body.icon,
        color: body.color
    })
    const resp = await  categoria.save(categoria);
    return resp;

}
const UpdateCategorias = async (id,categoria) => {
    console.log("categorias")
    const resp = await Categoria.findByIdAndUpdate(id,{
        name:categoria.name,
        icon:categoria.icon,
        color: categoria.color
    },{new :true})
    return resp
}

const deleteCategorias = async (id) => {
    console.log(id)
    return Categoria.findByIdAndDelete(id).then(Categoria=>{
        if(Categoria)
            return "susses"
        else
            return "not susses"
     }).catch(err=>{
        return err
     });
    
}

module.exports = {
    getAllCategorias,
    getByIdCategorias,
    saveCategoria,
    UpdateCategorias,
    deleteCategorias
}