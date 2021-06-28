const mongoose = require("mongoose")
const { Schema } = mongoose
const slugify = require("slugify")

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  img: {
    type: [String],
    default: ["https://res.cloudinary.com/huyan/image/upload/v1622477070/default-image_pf91dt.jpg"],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
})

productSchema.pre("validate", function () {
  if (this.name) {
    slugify(this.name, { lower: true, strict: true })
  }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product
