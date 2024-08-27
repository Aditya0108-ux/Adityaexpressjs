//objects-intro
let express = require("express");
let app = express();

let person = {
  firstName : "Amit",
  lastName : "Sharma",
  gender : "male",
  age : 30,
  isMember : true,
};

//Exercise 1: Return the Person Object

app.get("/person",(req , res) => {
     res.json(person);
});

//Exercise 2: Access the Full Name of the Person

function getFullName(person){
  return person.firstName + " " + person.lastName;
}

app.get("/person/fullname",(req , res) => {
  let fullname = getFullName(person);
  res.json({fullName : fullname});
  
})

//Exercise 3: Access Just the First Name and Gender of the Person

function getfirstNameAndGender(person){
  return {
    firstName : person.firstName ,
    gender : person.gender ,
  };
}

app.get("/person/firstname-gender" , (req , res) => {
  let firstNameAndGender = getfirstNameAndGender(person);
  res.json(firstNameAndGender);
});

//Exercise 4: Increment the Age of the Person and Return the Updated Object

function getIncrementedAgeObject(person){
  person.age = person.age + 1;
  return person;
}

app.get("/person/increment-age", (req , res) => {
  let updatedObject = getIncrementedAgeObject(person);
  res.json(updatedObject);
})

//Exercise 5: Return the Full Name and Membership Status of the Person

function getFullNameAndMembership(person){
  return {
    fullName : getFullName(person) ,
     isMember : person.isMember ,
  }
}

app.get("/person/fullname-membership", (req ,res) => {
  let fullNameAndMembership = getFullNameAndMembership(person);
  res.json(fullNameAndMembership);
})


//Exercise 6: Get Final Price After Discount for Members


function getFinalPrice(cartTotal, isMember){
  let finalPrice;
  if(isMember === true){
      finalPrice = cartTotal - cartTotal * 0.1;
  }
  else{
   finalPrice = cartTotal;
  }
    return finalPrice;
}

app.get("/person/final-price",(req , res) => {
        let cartTotal = parseFloat(req.query.cartTotal);
        let finalPrice = getFinalPrice(cartTotal,person.isMember);
         res.json({finalPrice : finalPrice});
})

//Exercise 7: Get Shipping Cost Based on Cart Total and Membership Status

function getShippingCost(cartTotal , isMember){
  let shippingCost;
  if(cartTotal > 500 && isMember === true ){
    shippingCost = 0;
  }
  else{
    shippingCost = 99;
  }
  return shippingCost;
}

app.get("/person/shipping-cost",(req ,res) => {
      let cartTotal = parseFloat(req.query.cartTotal);
      let shippingCost = getShippingCost(cartTotal,person.isMember);
      res.json({shippingCost : shippingCost.toFixed(2)});
       
     
})






let PORT = 3000;
app.listen(PORT,() => {
  console.log("Server is running on http://localhost:" + PORT);
})