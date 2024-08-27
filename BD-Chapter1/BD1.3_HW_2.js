let express = require("express");
let app = express();
let PORT = 3000;

//Calculate a person’s BMI category given weight (kilograms) and height(meters)
//API Call: http://localhost:3000/check-bmi?weight=70&height=1.75
app.get("/check-bmi", (req,res)=> {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = weight / (height * height);
  let category = "";
  if(bmi < 18.5) category = "Underweight";
  else if(bmi < 24.9 ) category = "Normal Weight";
  else if(bmi < 29.9) category = "Overweight";
  else category = "Obese";
  res.send("BMI category is " + category);
  })

  //Calculate a student’s academic performance based on their grade
  //API Call: http://localhost:3000/check-performance?grade=91

  app.get("/check-performance", (req,res) => {
    let grade = parseFloat(req.query.grade);
    let result = "";
    if(grade >= 90 ) result = "Excellent";
    else if(grade >= 75) result = "good";
    else if(grade >= 50) result = "Average";
    else result = "Poor";
    res.send("Academic performance is " + result);
    
  })

   //Calculate a person’s age group given their age
   //API Call: <http://localhost:3000/check-age-group?age=25>
   app.get("/check-age-group",(req,res) => {
       let age = parseFloat(req.query.age);
      let result = ""
       if(age <= 12) result = "Child";
       else if(age <=17) result = "Teenager";
       else if(age <= 64) result = "Adult";
       else result = "Senior";
       res.send("Age group is " + result);
   })

   //Calculate a person’s loan eligibility given creditScore
   //API Call: http://localhost:3000/check-loan-eligibility?creditScore=670

   app.get("/check-loan-eligibility",(req,res) => {
       let creditScore = parseFloat(req.query.creditScore);
       let result = "";
       if(creditScore >= 750) result = "high";
       else if(creditScore >= 650) result = "medium";
       else result = "low";
     res.send("Loan eligibility is " + result);
   })

    //Given a person’s income calculate the tax bracket they fall in
//API Call: <http://localhost:3000/check-tax-bracket?income=720000>

app.get("/check-tax-bracket",(req,res) => {
  let income = parseFloat(req.query.income);
  let result = "";
  if(income <= 500000) result = "10 % tax bracket";
  else if(income <= 1000000) result = "15 % tax bracket";
  else if(income <= 1500000) result = "20 % tax bracket";
  else result = "30 % tax bracket";
  res.send("You fall under " + result);
})







app.listen(PORT,() => {
  console.log("Server is running on http://localhost:" + PORT); 
});