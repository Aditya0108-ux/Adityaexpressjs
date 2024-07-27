const { Console } = require("console");
let express = require("express");
const { parse } = require("querystring");
let app = express();
let PORT = 3000;

// Create an endpoint that takes the marks in two subjects and returns the total marks.
//API Call: <http://localhost:3000/total-marks?marks1=70&marks2=80>

app.get("/total-marks",(req,res) => {
    let marks1 = parseFloat(req.query.marks1);
    let marks2 = parseFloat(req.query.marks2);
    let totalMarks = marks1 + marks2;
  res.send(totalMarks.toString());
})

//Create an endpoint that takes the weight of 3 items in a shipment and returns the total weight of the shipment.
//API Call: <http://localhost:3000/total-weight?weight1=3&weight2=3&weight3=5>

app.get("/total-weight",(req,res)=>{
  let weight1 = parseFloat(req.query.weight1);
  let weight2 = parseFloat(req.query.weight2);
  let weight3 = parseFloat(req.query.weight3);
  let totalWeight = weight1 + weight2 + weight3;
  res.send(totalWeight.toString());
})

//Create an endpoint that takes the annual salary and returns the monthly salary.
//API Call: <http://localhost:3000/monthly-salary?annualSalary=1200000>\ 
app.get("/monthly-salary",(req,res)=>{
  let annualSalary = parseFloat(req.query.annualSalary);
  let monthlySalary = annualSalary/12;
  res.send(monthlySalary.toString());
}) 

//Create an endpoint to calculate the total number of pages read given pages per day and number of days.
//API Call: <http://localhost:3000/total-pages?pagesPerDay=20&days=6>
app.get("/total-pages",(req,res)=>{
  let pagesPerDay = parseFloat(req.query.pagesPerDay);
  let days = parseFloat(req.query.days);
  let totalPages = pagesPerDay * days;
  res.send(totalPages.toString());
}) 

  //Create an endpoint to calculate the conversion from one currency to another given the exchange rate.
//API Call: <http://localhost:3000/currency-conversion?amount=2000&exchangeRate=0.0125>

app.get("/currency-conversion",(req,res)=>{
  let amount = parseFloat(req.query.amount);
  let exchangeRate = parseFloat(req.query.exchangeRate);
  let conversionAmount = amount * exchangeRate;
  res.send(conversionAmount.toString());
}) 

//Create an endpoint to calculate the average sales of a product, given the sales on 3 days.
//API Call: <http://localhost:3000/average-sales?sales1=30&sales2=35&sales3=50>
     app.get("/average-sales",(req,res)=>{
       let sales1 = parseFloat(req.query.sales1);
       let sales2 = parseFloat(req.query.sales2);
       let sales3 = parseFloat(req.query.sales3);
       let averageSales = (sales1+sales2+sales3)/3;
       res.send(averageSales.toString());
     }) 

     


app.listen(PORT,() => {
  console.log("Server is running on http://localhost:" + PORT);
})