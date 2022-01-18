const pricingRoutes = require('express').Router()
const pricing = require('../models/Pricing')

pricingRoutes.post('/pricing/create', async (req, res) => {
  let data = req.body

  res.send(await pricing.saveProduct(data))
})

pricingRoutes.get('/pricing', async (req, res) => {
  const id = req.body

  res.send(await pricing.get(data))
})

module.exports = pricingRoutes