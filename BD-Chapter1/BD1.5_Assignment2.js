let express = require("express");
let cors = require("cors");
let app = express();
let PORT = 3000;

app.use(cors());

app.get("/", (req,res) => {
  res.send("Welcome to stock portfolio analysis API!")
} )

//Endpoints begin here
//Endpoint 1: Create an endpoint that takes three variables as query parameters and returns total Return Value of the stocks.
//API Call: <http://localhost:3000/calculate-returns?boughtAt=300&marketPrice=400&quantity=2>

app.get("/calculate-returns",(req , res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let totalReturn = (marketPrice - boughtAt) * quantity;
  res.send(totalReturn.toString());

})

//Endpoint 2: Create an endpoint that takes four variables as query parameters and returns total return value of all the stocks.
//API Call: <http://localhost:3000/total-returns?stock1=100&stock2=200&stock3=200&stock4=400>

app.get("/total-returns",(req , res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturn = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturn.toString());
  
})

//Endpoint 3: Create an endpoint that takes two variables as query parameters and returns total ReturnPercentage of the stocks.
//API Call: <http://localhost:3000/calculate-return-percentage?boughtAt=400&returns=200>

app.get("/calculate-return-percentage",(req , res) => {
     let boughtAt = parseFloat(req.query.boughtAt);
     let returns = parseFloat(req.query.returns);
     let totalReturnPercentage = (returns / boughtAt) * 100;
     res.send(totalReturnPercentage.toString());
  
})

//Endpoint 4:Create an endpoint that takes four variables as query parameters and returns total return percentage of all the stocks.
//API Call: <http://localhost:3000/total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40>

app.get("/total-return-percentage",(req , res)=> {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
  
  
}) 

//Endpoint 5: Create an endpoint that takes returnPercentage as query parameter and returns the stock status.
//API Call: <http://localhost:3000/status?returnPercentage=90>

app.get("/status", (req , res) => {
        let returnPercentage = parseFloat(req.query.returnPercentage);
  let result = "";
        if(returnPercentage > 0){
          result = "profit";
        }
  else{
    result = "loss";
  }
  res.send(result);
})





app.listen(PORT,() => {
  console.log("Server is running on http://localhost:" + PORT);
})
