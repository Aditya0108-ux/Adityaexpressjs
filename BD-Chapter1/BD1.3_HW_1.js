let express = require("express");
let app = express();
let PORT = 3000;

//Create an endpoint that takes a number as a query parameter and returns whether the number is a whole number or not.
//API Call: <http://localhost:3000/check-whole-number?number=10>
app.get("/check-whole-number", (req,res) => {
     let number = parseFloat(req.query.number);
      let result = "";
     if(number >= 0) result = "Number is whole number";
     else result = "Number is not whole number";
     res.send(result);
  
})

//Create an endpoint that takes two numbers as a query parameter and returns whether the numbers are equal or not.
//API Call: <http://localhost:3000/check-equal?num1=40&num2=45>
   app.get("/check-equal", (req,res) => {
        let num1 = parseFloat(req.query.num1);
         let num2 = parseFloat(req.query.num2);
         let result = "";
        if(num1 === num2) {
          result = "equal";
        }
        else{
          result = "not equal";
        }
        res.send("The numbers are " + result);

   })

  //Create an endpoint that takes a boolean query parameter indicating if a user is active and returns 'User is Active' or 'User is not Active'.
   //API Call: <http://localhost:3000/check-active?isActive=true>
     app.get("/check-active", (req,res) => {
           let isActive = req.query.isActive === "true";
            let result = "";
           if(isActive) {
             result = "active";
           }
           else{
             result = "not active";
           }
           res.send("User is " + result);

      })

//Create an endpoint that takes a user's cost of goods bought as a query parameter and returns 'User is eligible for a discount' if the cost is over 1000, otherwise 'User is not eligible for a discount'.
//API Call: <http://localhost:3000/check-discount?cost=1700>
  app.get("/check-discount", (req,res) => {
       let cost = req.query.cost;
        let result = "";
       if(cost > 1000) {
         result = "eligible";
       }
       else{
         result = "not eligible";
       }
       res.send("User is " + result + " for discount");

  })

  //Create an endpoint that takes work experience (in years) as a query parameter and returns whether the person is experienced, fresher, or non-working.
//API Call: <http://localhost:3000/check-experience?workExperience=5>
    app.get("/check-experience", (req,res) => {
         let workExperience = req.query.workExperience;
          let result = "";
         if(workExperience > 0) {
           result = "experienced";
         }
           else if(workExperience < 0){
             result = "non-working"
           }
         else{
           result = "fresher";
         }
         res.send("Person is " + result);

    })

   //Create an endpoint that takes the result as a query parameter and returns whether the grade is Grade A (above 80), B (between 50 to 80), or Fail (below 50).
//API Call: <http://localhost:3000/check-result?result=70>
  app.get("/check-result", (req,res) => {
       let result = parseFloat(req.query.result);
        let output = "";
       if(result > 80) {
         result = "A";
       }
         else if(result >= 50){
           result = "B"
         }
       else{
         result = "C";
       }
       res.send("Grade is " + result);

  })

  //Create an endpoint that takes the number of steps as a query parameter and returns whether the student’s attendance is low (less than 50 classes), moderate (50 to 90 classes), or high (more than 90 classes).
//API Call: <http://localhost:3000/check-attendance?attendance=95>
         app.get("/check-attendance", (req,res) => {
              let attendance = parseFloat(req.query.attendance);
               let result = "";
              if(attendance < 50) {
                result = "low";
              } else if(attendance <= 90){
                  result = "moderate";
                } else{
                result = "high";
              }
              res.send("Attendance is " + result);

         })

     //Create an endpoint that takes the number of stars a restaurant has as a query parameter and returns whether the restaurant rating is low (less than 3 stars), medium (3 or 4 stars), or high (5 stars).
      //API Call: <http://localhost:3000/check-rating?stars=4>
      app.get("/check-rating", (req,res) => {
            let stars = parseFloat(req.query.stars);
             let result = "";
            if(stars < 3) {
              result = "low";
            } else if(stars <= 4 ){
                result = "medium";
              } else{
              result = "high";
            }
            res.send("Restaurant rating is " + result);

       })


   





app.listen(PORT,()=>{
  console.log("Server is running on https://localhost:" + PORT);
})