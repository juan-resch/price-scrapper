const product = require('../prisma').product

const saveProduct = async data => {
  const result = await product.create({
    data
  })

  return result
}

const getProduct = async id => {
  const result = await product.findFirst({
    where: {
      id
    }
  })

  return result
}

const getAll = async () => {
  const result = await product.findMany({})

  return result
}

module.exports = { saveProduct, getProduct, getAll }