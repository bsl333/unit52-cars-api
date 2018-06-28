const uuid = require('uuid')
const cars = [{
  make: 'Subaru',
  model: 'WRX',
  year: '2011',
  type: 'Sedan',
  id: "1"
}]

const getAll = (limit) => {
  return limit ? cars : cars.slice(0, limit)
}

const getOne = (params) => {
  const id = params.id
  const errors = []
  let response
  let car = cars.find(car => car.id === id)
  if(!id) {
    errors.push(`no id provided`)
  } else if (!car) {
    errors.push(`could not find car with id ${id}`)
  }
  response = errors.length ? { errors } : car
  return response
}

const create = (body) => {
  let {
    make,
    model,
    year,
    type
  } = body
  const errors = []
  let response
  if (!make || !model) {
    errors.push(`invalid request, missing make and/or model. make=${make} model=${model}`)
  } else {
    year = year ? year : "NA"
    type = type ? type :  "NA"
    response = { make, model, year, type, id: uuid()}
    cars.push(response)
  }
  response = errors.length ? { errors } : response
  return response
}

const update = ({ body, params }) => {
  const { id } = params
  const { 
    make,
    model,
    year,
    type
  } = body
  const errors = []
  const car = cars.find(car => car.id === id)
  let response
  if (!car) {
    errors.push(`Bad request: invalid id ${id}`)
  } else {
    car.make = make ? make : car.make
    car.model = model ? model : car.model
    car.year = year ? year : car.year
    car.type = type ? type : car.type
  }
  response = errors.length ? { errors } : car
  return response
}

const destroy = (params) => {
  const id = params.id
  const errors = []
  const car = cars.find(car =>  car.id === id)
  if (!car) {
    errors.push(`Bad request: invalid id ${id}`)
  } else {
    const idx = cars.findIndex(car => car.id === id)
    cars.splice(idx, 1)
  }
  let response = errors.length ? { errors } : {}
  return response
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}