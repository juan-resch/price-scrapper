const productRoutes = require('express').Router()
const product = require('../models/Product')

productRoutes.post('/product/create', async (req, res) => {
  let data = req.body

  data.link = data.link.trim()

  res.send(await product.saveProduct(data))
})

productRoutes.get('/product', async (req, res) => {
  const id = req.body

  res.send(await product.get(data))
})

module.exports = productRoutes