//functions
let express = require("express")
let app = express();
let PORT = 3000;

//Create an endpoint that returns a welcome message.
//API Call: <http://localhost:3000/welcome>

function getWelcomeMessage(){
  return "Welcome to our Service!";
}

app.get("/welcome",(req,res) => {
  res.send(getWelcomeMessage());
})

//Create an endpoint that takes a username as a query parameter and returns a greeting message.
//API Call: <http://localhost:3000/greet?username=John>

 function getGreetingMessage(username){

   return "Hello, " + username + "!";
   
 }

app.get("/greet",(req,res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
})

//Create an endpoint that takes a password as a query parameter and returns if it is strong (length > 15) or weak.
//API Call: <http://localhost:3000/check-password?password=myverystrongpassword>

function checkPassword(password){
  if(password.length > 15){
    return "Password is Strong";
  }
  else{
    return "Password is weak";
  }
}

app.get("/check-password",(req,res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
})

//Create an endpoint that takes two numbers as query parameters and returns their sum.
//API Call: <http://localhost:3000/sum?num1=5&num2=10>

function getSum(num1,num2){
  let sum = num1 + num2;
  return sum.toString();
}

app.get("/sum",(req,res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1,num2));
})

//Create an endpoint that takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.
//API Call: <http://localhost:3000/subscription-status?username=John&isSubscribed=true>

function getSubscriptionStatus(username,isSubscribed){
  if(isSubscribed){
    return username + " is subscribed";
  }
  else{
    return username + " is not subscribed";
  }
}

app.get("/subscription-status",(req,res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === "true";
  res.send(getSubscriptionStatus(username,isSubscribed));
})

//Create an endpoint that takes a product price and a discount percentage, and returns the final price after discount.
//API Call: <http://localhost:3000/discounted-price?price=100&discount=10>

function getDiscountedPrice(price,discount){
   let discountPrice = price - (price * discount)/100;
   return discountPrice.toString();
}

app.get("/discounted-price",(req,res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price,discount));
})

//Create an endpoint that takes a user's age, gender, and name, and returns a personalized greeting message.
//API Call: <http://localhost:3000/personalized-greeting?age=25&gender=male&name=John>

 function getPersonalizedGreeting(age,gender,name){
   let greeting = "Hello, " + name + "! You are a " + age + " year old " + gender;
   return greeting;
 }

app.get("/personalized-greeting",(req,res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age,gender,name));
})

//Create an endpoint that takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax.
//API Call: <http://localhost:3000/final-price?price=100&discount=10&tax=5>

function getFinalPrice(price,discount,tax){
  let discountPrice = price - (price * discount)/100;
  let finalPrice = discountPrice + (discountPrice * tax)/100;
  return finalPrice;
}

app.get("/final-price",(req,res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price,discount,tax).toString());
})

//Create an endpoint that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.
//API Call: <http://localhost:3000/total-exercise-time?running=30&cycling=40&swimming=50>

function getTotalExerciseTime(running,cycling,swimming){
    return running + cycling + swimming;
}


app.get("/total-exercise-time", (req,res) => {
     let running = parseFloat(req.query.running);
     let cycling = parseFloat(req.query.cycling);
     let swimming = parseFloat(req.query.swimming);
      res.send(getTotalExerciseTime(running,cycling,swimming).toString());
})


app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
})