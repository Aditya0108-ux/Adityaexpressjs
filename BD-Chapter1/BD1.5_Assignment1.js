let express = require("express");
let cors = require("cors");
let PORT = 3000;

let app = express();
app.use(cors());

//Server side values
let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

//Endpoint 1: Create an endpoint that takes a newItemPrice and cartTotal as a query parameter and returns total cart value.
//API Call: <http://localhost:3000/cart-total?newItemPrice=1200&cartTotal=0>
app.get("/cart-total",(req,res) => {
   let newItemPrice = parseFloat(req.query.newItemPrice);
   let cartTotal = parseFloat(req.query.cartTotal);
  let totalCartValue = newItemPrice + cartTotal;
  res.send(totalCartValue.toString());
})

//Endpoint 2 : Create an endpoint that takes a cartTotal and isMember as a query parameter and returns final price after applying the discount.
//API Call: <http://localhost:3000/membership-discount?cartTotal=3600&isMember=true>
app.get("/membership-discount",(req , res) => {
   let cartTotal =parseFloat(req.query.cartTotal);
   let isMember = req.query.isMember==="true";
   let discount = "";
   if(isMember) {
      discount = cartTotal - (cartTotal * discountPercentage/100);
   }
   else{
      discount = cartTotal;
   }
   res.send(discount.toString())
   
})

//Endpoint 3 : Create an endpoint that takes a cartTotal as a query parameter and returns the tax applied on the Cart Total.
//API Call: <http://localhost:3000/calculate-tax?cartTotal=3600>
app.get("/calculate-tax",(req , res) => {
   let cartTotal =parseFloat(req.query.cartTotal);
   let tax = cartTotal * taxRate / 100;
   res.send(tax.toString());

})

//Endpoint 4 : Create an endpoint that takes a shippingMethod and distance as a query parameter and returns the number of days for delivering the package.
//API Call: <http://localhost:3000/estimate-delivery?shippingMethod=express&distance=600>
app.get("/estimate-delivery",(req , res) => {
   let shippingMethod =req.query.shippingMethod;
   let distance = req.query.distance;
   let numberOfDays = "";
   if(shippingMethod === "standard"){
      numberOfDays = distance/50;
   }
   else {
      numberOfDays = distance/100;
   }
   res.send(numberOfDays.toString());

})

//Endpoint 5 : Create an endpoint that takes weight and distance as query parameters and returns the shipping cost of the packages.
//API Call: <http://localhost:3000/shipping-cost?weight=2&distance=600>

app.get("/shipping-cost",(req , res) => {
   let weight =parseFloat(req.query.weight);
   let distance = parseFloat(req.query.distance);
   let shippingCost = "";
    shippingCost = weight * distance * 0.1;
   res.send(shippingCost.toString());

})

//Endpoint 6 : Create an endpoint that takes purchaseAmount as query parameters and returns the loyalty points.
//API Call: <http://localhost:3000/loyalty-points?purchaseAmount=3600>
app.get("/loyalty-points",(req , res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
     let loyaltyAmount = loyaltyRate * purchaseAmount;
   res.send(loyaltyAmount.toString());

})








app.listen(PORT,() => {
     console.log("Server is running on http://localhost:" + PORT);
})
