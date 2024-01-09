const { mongose } = require("../connection/conection.mongose")

const productos = mongose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    countInstock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    rating: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

productos.virtual('id').get(function(){
    return this._id.toHexString()
})
productos.set('toJSON',{
    virtuals:true
})

const Product = mongose.model("Product", productos);

module.exports = { Product }