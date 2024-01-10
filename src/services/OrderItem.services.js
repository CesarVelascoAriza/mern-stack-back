const { OrderItem } = require('../models/Order-items.schema')


const guardarOrdenItems = async (items) => {
    const orderItemsIds = Promise.all(req.body.orderItems.map(async (orderItem) => {
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product
        })

        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
    }))

    return orderItemsIds;
}

const orderItemsIdsResolved = await guardarOrdenItems(items);

const totalPrices = await Promise.all(orderItemsIdsResolved.map(async (orderItemId) => {
    const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');
    const totalPrice = orderItem.product.price * orderItem.quantity;
    return totalPrice
}))
const totalPrice = totalPrices.reduce((a, b) => a + b, 0);


module.exports = {
    guardarOrdenItems,
    orderItemsIdsResolved,
    totalPrices,
    totalPrice
}