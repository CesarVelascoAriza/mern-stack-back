const {mongose} = require("../connection/conection.mongose")

const Categorias = mongose.Schema({
    name:{
        type:String,
        required:true
    },
    icon:{
        type:String
    },
    color:{
        type:String
    }
})

exports.Categoria = mongose.model("Category", Categorias);
//const Categoria = mongose.model("Category", Categorias);

//module.exports ={Categoria}
