const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const carRoutes = require('./src/routes/cars')

const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/cars', carRoutes)


app.use((req, res, next) => {
  next({status: 404, message: 'route not found'})
})

app.use((err, req, res, next) => {
  const error = { }
  error.status = err.status
  error.message = err.message
  res.status(error.status).json({ error })
})

app.listen(port, () => {
  console.log(`running on port ${port}`)
})