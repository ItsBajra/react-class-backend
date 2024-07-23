const wishlistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }]
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;
