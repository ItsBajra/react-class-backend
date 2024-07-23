const adminSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
