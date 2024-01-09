const {mongose} = require('../connection/conection.mongose')


const UserSchema = mongose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    passwordHash:{
        type:String,
        required: true
    },
    street:{
        type:String,
        default:''
    },
    apartament:{
        type:String,
        default:''
    },
    city:{
        type:String,
        default:''
    },
    zip:{
        type:String,
        default:''
    },
    country:{
        type:String,
        default:''
    },
    phone:{
        type:Number,
        required: true,
        default:''
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
}) 

UserSchema.virtual('id').get(()=>{
    return this._id.toHexString();
})
UserSchema.set('toJSON',{
    virtuals:true
})

exports.User = mongose.model('User',UserSchema)
exports.UserSchema = UserSchema; 