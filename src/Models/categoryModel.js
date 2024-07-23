const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
    }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
