const buyerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

});

const Buyer = mongoose.model('Buyer', buyerSchema);
module.exports = Buyer;
