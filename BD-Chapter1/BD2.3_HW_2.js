let express = require("express");
let app = express();
let PORT = 3000;

let products = [
  {name : "Product A", inStock : true },
  {name : "Product B", inStock : false},
  {name : "Product C", inStock : true},
  {name :  "Product D", inStock : false},
]

let users = [
  {name : "Alice", age : 25},
  {name : "Bob", age : 30},
  {name : "Charlie", age : 17},
  {name : "Dave", age : 16},
]

let productPrices = [
  {name : "Product A", price : 50},
  {name : "Product B", price : 150},
  {name : "Product C", price : 200},
  {name : "Product D", price : 90},
]

let articles = [
  {title : "Article A", wordCount : "400"},
  {title : "Article B", wordCount : "600"},
   {title : "Article C", wordCount : "700"},
  {title : "Article D", wordCount : "300"},
];

let movies = [
  {title : "Movies A", rating : "8.5"},
  {title : "Movies B", rating : "7.0"},
   {title : "Movies C", rating : "9.0"},
  {title : "Movies D", rating : "6.5"},
]
let employees = [
  {name : "Employee A", experience : "3"},
  {name : "Employee B", experience : "6"},
   {name : "Employee C", experience : "10"},
  {name : "Employee D", experience : "2"},
]




//Exercise 1: Filter In-Stock Products
//Sample Endpoint: http://localhost:3000/in-stock-products

function filterInStockProducts(product){
   return product.inStock === true;
}

app.get("/in-stock-products",(req ,res) => {
    let result = products.filter(product => filterInStockProducts(product))
    res.json(result);
})

//Exercise 2: Filter Adults from User List
//Sample Endpoint: http://localhost:3000/adult-users

function filterAdults(user){
  return user.age > 18;
}

app.get("/adult-users",( req , res) => {
    let result =  users.filter(user => filterAdults(user));
    res.json(result);
})

//Exercise 3 : Exercise 3: Filter Expensive Products
//Sample Endpoint: http://localhost:3000/expensive-products?price=100
function filterExpensiveProducts(product,price){
        return product.price > price;
}

app.get("/expensive-products", (req , res) => {
              let price = parseFloat(req.query.price);
               let result = productPrices.filter(product => filterExpensiveProducts(product,price));
     res.json(result);
})

//Exercise 4: Filter Articles by Word Count
//Sample Endpoint: http://localhost:3000/long-articles?minWords=500

function filterLongArticles(article,minWords){
  return article.wordCount > minWords;
}

app.get("/long-articles",(req , res) => {
     let minWords = parseFloat(req.query.minWords);
     let result = articles.filter(article => filterLongArticles(article,minWords));
     res.json(result);
        
});

//Exercise 5: Filter Movies by Rating
//Sample Endpoint: http://localhost:3000/high-rated-movies?rating=8

function filterHighRatedMovies(movie,rating){
  return movie.rating > rating;
}

app.get("/high-rated-movies",( req , res) => {
      let rating = parseFloat(req.query.rating);
      let result = movies.filter(movie => filterHighRatedMovies(movie,rating));
      res.json(result); 
});

//Exercise 6: Filter Employees by Experience
//Sample Endpoint: http://localhost:3000/experienced-employees?years=5

function filterExperiencedEmployees(employee,years){
     return employee.experience > years;
}

app.get("/experienced-employees",(req , res) => {
        let years =  parseFloat(req.query.years);
        let result = employees.filter(employee => filterExperiencedEmployees(employee,years));
         res.json(result);
})





app.listen(PORT, () => {
  console.log("Server is running on http//localhost:");
})