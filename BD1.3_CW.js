const { Console } = require("console");
let express = require("express");
let app = express();
let PORT = 3000;


//Create an endpoint that takes a number as a query parameter and returns if the number is positive or negative.
//API Call: <http://localhost:3000/check-number?number=-5>
app.get("/check-number",(req,res) =>{
  let number = parseFloat(req.query.number);
  let result = "";
  if(number >= 0){
    result = "Number is positive";
    res.send(result);
  }
  else {
    result = "Number is negative";
    res.send(result);
  }
})

//Create an endpoint that takes a number as a query parameter and returns if the number is even or odd.
//API Call: <http://localhost:3000/check-even-odd?number=4>

app.get("/check-even-odd",(req,res)=>{
    let number = parseFloat(req.query.number);
     let result = "";
  if(number%2 === 0){
    result= "Number is even";
  }
  else{
    result = "Number is odd";
  }
  res.send(result);
})

//Create an endpoint that takes a boolean query parameter isLoggedIn and returns if the user is logged in.
//API Call: <http://localhost:3000/check-login?isLoggedIn=true>

app.get("/check-login",(req,res)=>{
    let isLoggedIn = req.query.isLoggedIn;
     let result = "";
  if(isLoggedIn === "true"){
    result= "User is Logged in";
  }
  else{
    result = "User is not Logged in";
  }
  res.send(result);
})

//Create an endpoint that takes an age as a query parameter and returns if the user is eligible for a discount (age over 65).
//API Call: <http://localhost:3000/check-discount?age=70>

  app.get("/check-discount",(req,res) => {
      let age = parseFloat(req.query.age);
    let result = "";
    if(age > 65){
      result = "User is eligible for discount";
    }
    else{
      result = "User is not eligible for discount";
    }
    res.send(result);
  })

   //Create an endpoint that takes a number as a query parameter and returns if the number is positive, negative, or zero.
//API Call: <http://localhost:3000/check-number-type?number=0>

   app.get("/check-number-type",(req,res) => {
       let number = parseFloat(req.query.number);
     let result = "";
     if(number > 0){
       result = "Number is Positive";
     }
     else if(number < 0){
       result = "Number is negative";
     }
     else{
       result = "Number is zero";
     }
     res.send(result);
   })

   //Create an endpoint that takes a temperature as a query parameter and returns if the temperature is cold (below 15°C), warm (15°C to 25°C), or hot (above 25°C).
//API Call: <http://localhost:3000/check-temperature?temperature=20>

  app.get("/check-temperature",(req,res) => {
      let temperature = parseFloat(req.query.temperature);
      let result = "";
      if(temperature < 15) result = "Temperature is Cold";
    else if(temperature >= 15 && temperature <= 25) result = "Temperature is Warm";
    else result = "Temperature is Hot";
    res.send(result);
  })

    //Create an endpoint that takes a steps as a query parameter and returns if the user's activity level is low (below 5000), moderate (5000 to 10000), or high (above 10000).
//API Call: <http://localhost:3000/check-activity-level?steps=7500>
 app.get("/check-activity-level",(req,res) => {
     let steps = parseFloat(req.query.steps);
     let result = "";
     if(steps < 5000) result = "Activity level is Low";
   else if(steps >= 5000 && steps <= 10000) result = "Activity level is Moderate";
   else result = "Activity level is High";
   res.send(result);
 })

//Create an endpoint that takes likes as a query parameter and returns if a social media post has low (below 100), medium (100 to 500), or high engagement (above 500).
//API Call: <http://localhost:3000/check-engagement?likes=250>


app.get("/check-engagement",(req,res) => {
     let likes = parseFloat(req.query.likes);
     let result = "";
     if(likes < 100) result = "Engagement level is Low";  
   else if(likes <=500) result = "Engagement level is Medium";
   else result = "Enagagement level is High";
   res.send(result);
 })









app.listen(PORT,() =>{
  console.log("Server is running on http://localhost:" + PORT);
})