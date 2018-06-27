const model = require('../model/cars')

const getAll = (req, res, next) => {
  const limit = req.query.limit
  const result = model.getAll(limit)
  res.json({ data: result })
}

module.exports = {
  getAll
}