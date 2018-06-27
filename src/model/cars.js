const uuid = require('uuid')
const cars = [{
  make: 'Subaru',
  model: 'WRX',
  year: '2011',
  type: 'Sedan',
  id: uuid()
}]

const getAll = (limit) => {
  return limit ? cars : cars.slice(0, limit)
}

module.exports = {
  getAll
}