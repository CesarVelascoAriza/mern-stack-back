const { ErrorHanddler } = require('../modelClass/ErrorHanddler');
const { order } = require('../models/Order.schema')


const listaDeOrdenes = async () => {
    return order.find();
}

const obtenerOrden = async (id) => {
    return order.findById(id);
}
const guardarOrden = async (body) => {
    const orderItemsIds = Promise.all(body.orderItems.map(async (orderItem) => {
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product
        })

        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
    }))
    const orderItemsIdsResolved = await orderItemsIds;

    const totalPrices = await Promise.all(orderItemsIdsResolved.map(async (orderItemId) => {
        const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');
        const totalPrice = orderItem.product.price * orderItem.quantity;
        return totalPrice
    }))

    const totalPrice = totalPrices.reduce((a, b) => a + b, 0);
    const Orden = new order({
        orderItems: orderItemsIdsResolved,
        shippingAddress1: body.shippingAddress1,
        shippingAddress2: body.shippingAddress2,
        city: body.city,
        zip: body.zip,
        country: body.country,
        phone: body.phone,
        status: body.status,
        totalPrice: totalPrice,
        user: body.user,
    })
    newOrder = await Orden.save();

    if (!newOrder) {
        throw new ErrorHanddler('Error creando la orden ', 'no se pudo crear la orden ')
    }
    return newOrder;
}
const actualizarOrde = async () => {

}
const eliminarOrden = async () => {

}

module.exports = { listaDeOrdenes, obtenerOrden, guardarOrden }

