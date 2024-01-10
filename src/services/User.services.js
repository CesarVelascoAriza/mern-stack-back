const { ErrorHanddler } = require('../modelClass/ErrorHanddler');
const { User, UserSchema } = require('../models/User.schema')
const bcryp = require('bcryptjs')
const { ObjetoResponse } = require('../modelClass/ObjetoResponse')
const jwt = require('jsonwebtoken')

const getAll = async () => {
    console.log('listar todos');
    const listar = await User.find().select('-passwordHash');
    return listar;
}
const getById = async (id) => {
    console.log('get by id ', id)
    const userById = await User.findById(id).select('-passwordHash');
    return userById
}
const save = async (body) => {

    const newUser = new User({
        name: body.name,
        email: body.email,
        passwordHash: bcryp.hash(body.passwordHash, process.env.SECRETO),
        street: body.street,
        apartament: body.apartament,
        city: body.city,
        zip: body.zip,
        country: body.country,
        phone: body.phone,
        isAdmin: body.isAdmin
    })
    const rs = newUser.save();
    return rs
}
const update = async (id, body) => {
    console.log('usuarios actualizar')
    const res = await User.findByIdAndUpdate(id, {
        name: body.name,
        email: body.email,
        passwordHash: bcryp.hash(body.passwordHash, process.env.SECRETO),
        street: body.street,
        apartament: body.apartament,
        city: body.city,
        zip: body.zip,
        country: body.country,
        phone: body.phone,
        isAdmin: body.isAdmin
    }, { new: true })
    return res
}
const deleteuser = async (id) => {
    return User.findByIdAndDelete(id).then(user => {
        if (user)
            return { susses: 'ok' }
        else
            return { susses: 'No ok' }
    }).catch(err => {
        return err
    });
}

const loginUser = async (body) => {
    const user = User.findOne({ email: body.email })
    const secret = process.env.JWT_SECRET | 'secreto'
    if (!user) {
        throw new ErrorHanddler("Error", "Usuario no encontrado ")
    } else if (user && bcryp.compareSync(body.passwordHash)) {
        throw new ErrorHanddler("Error", "Usuario no encontrado ")
    } else {
        const token = jwt.sign({
            userId: user.id,
            userName: user.email,
            isAdmin: user.isAdmin
        },
        secret,
        {expiresIn: '1h'}
        )
        const r = new ObjetoResponse("ok", 'usuario y contraseña correctos');
        r.token(token)
        return r.login()
    }


}

module.exports = {
    deleteuser,
    update, save, getById,
    getAll, loginUser
}
