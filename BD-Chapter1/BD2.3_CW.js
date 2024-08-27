//filter with array-of-objects
let express = require("express");
let app = express();
let PORT = 3000;


let products = [
  {name: "Laptop", price : 50000, category : "Electronics"},
  {name : "Mobile" , price : 20000 , category : "Electronics"},
  {name : "shirt" , price : 1500, category : "Apparel"},
  {name : "Mixer Grinder", price : 4000, category : "Home Appliances"},
  ];

let cars = [
  {make : "Maruti" , model : "Swift" , "mileage" : 15000  },
   {make : "Hyundai" , model : "i20" , "mileage" : 25000  },
   {make : "Tata" , model : "Nexon" , "mileage" : 30000  },
]

let movies = [
  {title : "3 Idiots" , genre : "Comedy" , rating : 9 },
  {title : "Dangal" , genre : "Drama" , rating : 10 },
  {title : "Bahubali" , genre : "Action" , rating : 8 },
  ]

let orders = [
  {orderId : 1 , customerName : "Rahul" , status : "shipped"},
  {orderId : 2 , customerName : "Sita" , status : "pending"},
  {orderId : 3 , customerName : "Amit" , status : "shipped"},
]

//Question 1: Filter Products by Category
//API Call: http://localhost:3000/products/category/Electronics

function filterByCategory(productObj, category){
       return productObj.category === category
}
   app.get("/products/category/:category", (req , res) => {
       let category = req.params.category;
      let result = products.filter((productObj) => filterByCategory(productObj,category));
     res.json(result);
     
   })

//Question 2: Filter Cars by Mileage
//API Call: http://localhost:3000/cars/mileage/20000

function filterByMileage(carObj,mileage){
    return carObj.mileage < mileage;
}

app.get("/cars/mileage/:mileage", (req , res) => {
      let mileage = req.params.mileage;
      let result = cars.filter((carObj) => filterByMileage(carObj,mileage));
      res.json(result);
})

//Question 3: Filter Movies by Rating
//API Call: http://localhost:3000/movies/rating/8

function filterByRating(movieObj,rating){
     return movieObj.rating > rating;
}

app.get("/movies/rating/:rating" , (req , res) => {
      let rating = req.params.rating;
      let result = movies.filter(movieObj => filterByRating(movieObj,rating));
       res.json(result);
})

//Question 4: Filter Orders by Status
//API Call: http://localhost:3000/orders/status/shipped

function filterByStatus(orderObj,status){
     return orderObj.status === status;
}

app.get("/orders/status/:status", (req , res) => {
       let status = req.params.status;
        let result = orders.filter(orderObj => filterByStatus(orderObj,status));
        res.json(result);
})








app.listen(PORT,() => {
  console.log("Server is running on http://localhost:" + PORT);
})