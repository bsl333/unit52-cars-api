# Cars API
Unit52 -Separate Concerns (MVC) - Cars Express API


### What it is

Simple RESTful API that leverages an MVC architecture. It can perform 
- get all cars in the array of cars
- get one car via the car id, 
- create (post) a new car,
- update (put) an existing entry
- destroy (delete) an existing entry

a car object has the following properties:
```
{
  id: '123',
  make: 'Toyota',
  model: 'Corolla',
  type: 'Sedan',
  year: '2016'
}
```
  

### To use:
1) cd into directory where you cloned this repo
2) Install node modules: `npm i`
3) Start server: `node app.js`
4) using HTTPie or postman, can make requests (GET, POST, PUT, DELETE).


### Examples Using HTTPie:
1) GET Request: `http :3000/cars`

RESULT: 
```
{
    "data": [
        {
            "id": "1",
            "make": "Subaru",
            "model": "WRX",
            "type": "Sedan",
            "year": "2011"
        }
    ]
}
```
2) POST Request: `http post :3000/cars make="Honda" model="Civic" type="Sedan" year="2017"`

RESULT: 
```
{
    "data": {
        "id": "84d676e3-7090-4cb3-a906-a440faac402b",
        "make": "Honda",
        "model": "Civic",
        "type": "Sedan",
        "year": "2017"
    }
}
```
