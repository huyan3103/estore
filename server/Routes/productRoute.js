const express = require("express")
const router = express.Router()
const Product = require("../Schema/Product")

router.get("/product", async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json(products)
  } catch {
    res.send(500).json({ mess: "Error" })
  }
})

router.get("/product/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
    res.status(200).json(product)
  } catch (ex) {
    res.status(500).json({ Mess: "Error" })
  }
})

module.exports = router
