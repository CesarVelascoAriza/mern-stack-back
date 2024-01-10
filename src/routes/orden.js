const {Router} = require("express")
const { getAll, getid,create,update,delet } = require("../controllers/OrderService.cotroller")

const route = Router()

/**
 * usuarios 
 */

route.get('/',getAll)
route.get('/:id',getid)
route.post('/',create)
route.put('/:id',update)
route.delete('/:id',delet)


module.exports ={route}