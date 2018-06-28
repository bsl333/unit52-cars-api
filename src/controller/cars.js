const model = require('../model/cars')

const getAll = (req, res, next) => {
  const limit = req.query.limit
  const result = model.getAll(limit)
  res.json({ data: result })
}

const getOne = (req, res, next) => {
  const result = model.getOne(req.params)

  if (result.errors) {
    next({status: 404, message: 'bad request: invalid id', errors: result.errors})
  } else {
    res.json({ data: result })
  }
}

const create = (req, res, next) => {
  const result = model.create(req.body)
  if(result.errors) {
    next({ status: 404, message: 'invalid request', errors: result.errors})
  } else {
    res.status(201).json({ data: result })
  }
}

const update = (req, res, next) => {
  const result = model.update(req)
  if (result.errors) {
    next({ status: 404, message: 'Invalid request', errors: result.errors})
  } else {
    res.json({ data: result })
  }
}

const destroy = (req, res, next) => {
  const result = model.destroy(req.params)
  if (result.errors) {
    next({ status: 404, message: 'Invalid request'})
  } else {
    res.status(204).json({ data: result })
  }
}
module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}