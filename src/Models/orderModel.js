const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }],
    date: {
        type: Date,
        default: Date.now,
    },

});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
