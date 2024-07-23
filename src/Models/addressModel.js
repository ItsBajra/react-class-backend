const addressSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ["shipping", "billing"],
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
