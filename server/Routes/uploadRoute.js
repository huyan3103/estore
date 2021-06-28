const router = require("express").Router()
const multer = require("multer")
const cloudinary = require("cloudinary").v2
const cloudinaryConfig = require("../config/cloudinaryConfig")

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.use(cloudinaryConfig)

function uploadImages(type, base64) {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      `data:${type};base64,${base64}`,
      (error, result) => {
        if (error) return res.sendStatus(500)
        resolve(result.secure_url)
      },
    )
  })
}

router.post("/upload", upload.array("images"), async (req, res) => {
  let test = []
  for (const item of req.files) {
    const type = item.mimetype
    const base64 = item.buffer.toString("base64")
    const url = await uploadImages(type, base64)
    test.push(url)
  }
  res.sendStatus(204)
})

module.exports = router
