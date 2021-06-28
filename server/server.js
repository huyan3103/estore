const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const uploadRouter = require("./Routes/uploadRoute")
const productRouter = require("./Routes/productRoute")

mongoose.connect("mongodb://localhost:27017/store", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", uploadRouter)
app.use("/api", productRouter)

app.listen(5000, () => console.log("Server is running"))
