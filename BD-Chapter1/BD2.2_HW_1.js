let express = require("express");
let app = express();
let PORT = 3000;

//Question 1: Write an Express code snippet to filter temperatures above 25 degrees Celsius.
//API Call: <http://localhost:3000/high-temperatures>

let temperature =  [22, 26, 19, 30, 23, 28, 17, 31];

function filterHighTemperature(temp){
  let result = temp > 25;
  return result;
}

app.get("/high-temperatures", (req ,res) => {
         let filterTemperature = temperature.filter(temp => filterHighTemperature(temp))
          res.json(filterTemperature);
})

//Question 2: Write an Express code snippet to filter prices less than or equal to 100 rupees.
//API Call: <http://localhost:3000/low-prices>

let prices =  [80, 120, 95, 150, 60, 110];

function filterPrice(price){
  return price <= 100;
}

app.get("/low-prices",(req , res) => {
           let result = prices.filter(price => filterPrice(price));
            res.json(result);
})

//Question 3: Write an Express code snippet to filter product ratings greater than 3.5.
//API Call:<http://localhost:3000/high-ratings>

let ratings =  [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];
function filterPrice(rating){
  return rating > 3.5;
}

app.get("/high-ratings",(req , res) => {
           let result = ratings.filter(rating => filterPrice(rating));
            res.json(result);
})

//Question 4: Write an Express code snippet to filter Indian names longer than 6 characters.
//API Call: <http://localhost:3000/long-indian-names>

let names =  ["Akshay", "Priyanka", "Arjun", "Anushka", "Rajesh", "Kavita"];

function filterLongIndianName(name){
  return name.length > 6;
}

app.get("/long-indian-names",(req , res) => {
           let result = names.filter(name => filterLongIndianName(name));
            res.json(result);
});


//Question 5:Write an Express code snippet to filter products cheaper than a certain price.
//API Call: http://localhost:3000/cheaper-products?filterParam=100

let products = [10, 25, 50, 75, 100, 150, 200];

function filterCheaperProducts(product,filterParam){
  return product < filterParam;
}

app.get("/cheaper-products",(req , res) => {

          let filterParam = parseFloat(req.query.filterParam);
           let result = products.filter(product => filterCheaperProducts(product,filterParam));
            res.json(result);
});


app.listen(PORT , () => {
    console.log("Server is runing on http://localhost:" + PORT);
})