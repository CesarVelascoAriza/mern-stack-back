const { Product } = require("../models/Productos.shema")
const { getByIdCategorias } = require("./Categoria.service")
const err = require("../modelClass/ErrorHanddler")
const getallProductosService = async () => {
    /**
     * populate trae todo los elementos asociados en los documentos 
     *     filter = query.category.split(",")
     *   Product.find({category:filter}).populate("category");
     */
    return Product.find().populate("category");
}

const guardarProductoService = async (body) => {

    try {
        console.log(Product)
        const categoria = await getByIdCategorias(body.category);
        if (!categoria)
            return new err.ErrorHanddler("Error ", "Categoria no valida")
        console.log(categoria)
        const producto = new Product({
            name: body.name,
            description: body.description,
            richDescription: body.richDescription,
            image: body.image,
            images: body.images,
            brand: body.brand,
            price: body.price,
            category: body.category,
            countInstock: body.countInstock,
            rating: body.rating,
            isFeatured: body.isFeatured,
        });

        console.log(producto)
        const res = await producto.save(producto);
        return res

    } catch (error) {
        console.error("error ", error)
        throw new err.ErrorHanddler(error.message, "Error al Insertar el producto")
    }
}

const getProductoFindById = async (id) => {
    try {
        const res = await Product.findById(id);
        return res
    } catch (error) {
        console.error(error)
        throw new err.ErrorHanddler(error.message, "Error consultado el producto")
    }
}
const updateProducto = async (id, body) => {

    try {
        const categoria = await getByIdCategorias(body.category);
        if (!categoria)
            return new err.ErrorHanddler("Error ", "Categoria no valida")
        const res = await Product.findByIdAndUpdate(id, {
            name: body.name,
            description: body.description,
            richDescription: body.richDescription,
            image: body.image,
            images: body.images,
            brand: body.brand,
            price: body.price,
            category: body.category,
            countInstock: body.countInstock,
            rating: body.rating,
            isFeatured: body.isFeatured,
        }, { new: true })
        return res
    } catch (error) {
        console.error(error)
        throw new err.ErrorHanddler(error.message, "Error consultado el producto")
    }
}

const deleteById = async (id) => {

    try {
        return Product.findByIdAndDelete(id).then(
            Product => {
                if (Product)
                    return { "eliminado": "ok", "susses": "susses" }
                else
                    return { "eliminado": "no", "susses": " no susses" }
            }
        ).catch(err => {
            throw new err.ErrorHanddler(error.message, "Error consultado el producto")
        });
    } catch (error) {
        console.error(error)
        throw new err.ErrorHanddler(error.message, "Error consultado el producto")
    }
}

const countProducts = async () => {

    const cuenta = await Product.countDocuments({type:_id},(count)=>count)
    //const cuenta = await Product.find().count();
    if (!cuenta)
        throw new err.ErrorHanddler("", "")
    return cuenta
}

const isFeatured =async ()=>{
    const isFeatu = await Product.find({isFeatured:true})
    if (!isFeatu) {
        
    } else {
        return isFeatu
    }
}
module.exports = {
    guardarProductoService,
    getallProductosService,
    getProductoFindById,
    updateProducto,
    deleteById,
    countProducts,
    isFeatured
}