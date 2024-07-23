const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },

});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
