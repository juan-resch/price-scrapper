const pricing = require('../prisma').pricing

const savePrice = async data => {
  const result = await pricing.create({
    data
  })

  return result
}

const getPrice = async id => {
  const result = await pricing.findFirst({
    where: {
      id
    }
  })

  return result
}

module.exports = { savePrice, getPrice }