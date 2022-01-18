const express = require('express')
const axios = require('axios').default
const cheerio = require('cheerio')
const pricing = require('./models/Pricing')
const product = require('./models/Product')
const productRoutes = require('./routes/Product')
const PORT = 8000

const app = express()

app.use(express.json())
app.use(productRoutes)

async function start() {

  app.listen(PORT, () => {
    console.log('Server On 👩‍🚀')
  })

  const products = await product.getAll();

  setInterval(async () => {
    const date = new Date();
    if (date.getHours() == 6 && date.getMinutes() <= 2) {
      products.map((p) => { savePrice(p) })
    }

  }, 120000);
}

const savePrice = (p) => {
  console.log(p)
  let price = 0
  axios(p.link).then(response => {
    const html = response.data

    let $ = cheerio.load(html)

    price = $(`h4[itemprop='price']`).text()
    price = price.slice(3, price.length - 1)

    price = parseFloat(price)

    console.log(price)

    pricing.savePrice({ idProduct: p.id, price })
  })
}

start()
