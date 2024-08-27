let express = require("express");
let app = express();
let PORT = 3000;


//Calculate the BMI given weight (kilograms) and height(meters)
//API Call: http://localhost:3000/bmi?weight=70&height=1.75
app.get("/bmi",(req,res)=>{
   let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = weight/(height*height);
   res.send(bmi.toString());
  
})

//Create an endpoint that takes product, units & price as query parameters and returns total price to be paid.
//API Call: http://localhost:3000/checkout?product=Fuse&units=2&price=40

app.get("/checkout",(req,res)=>{
   let product = req.query.product;
  let units = parseFloat(req.query.units);
  let price = parseFloat(req.query.price);
   let totalPrice = units*price;
  res.send("Your total for " + units + " " + product + " is " + totalPrice);

})

//Create an endpoint that takes math, science & english as query parameters and returns grade in percentage
//API Call: http://localhost:3000/grade?maths=70&science=82&english=75
  app.get("/grade",(req,res)=>{
     let maths = parseFloat(req.query.maths);
    let science = parseFloat(req.query.science);
    let english = parseFloat(req.query.english);
     let gradeInPercentage = (maths + science + english) / 300 * 100;
    res.send("Your grade in percentage is " + gradeInPercentage + "%");

  })

  //Create an endpoint that takes cartTotal & discount ( percentage ) as query parameters and returns the result
  //API Call: http://localhost:3000/discounted-price?cartTotal=150&discount=5
       app.get("/discounted-price",(req,res)=>{
          let cartTotal = parseFloat(req.query.cartTotal);
         let discount = parseFloat(req.query.discount);
          let discountedPrice = (cartTotal - (cartTotal *  discount)/100);
         res.send("Result : Your bill amount is :" + discountedPrice);

       })

      //Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result
     //API Call: http://localhost:3000/split-bill?billAmount=150&numberOfFriends=3
        app.get("/split-bill",(req,res)=>{
            let billAmount = parseFloat(req.query.billAmount);
           let numberOfFriends = parseFloat(req.query.numberOfFriends);
            let splitBill = billAmount/numberOfFriends;
           res.send("Each friend owes Rs." + splitBill + " against the bill");

         })

        //Create an endpoint that takes a temperature in Celsius and returns the temperature in Fahrenheit.
        //API Call: http://localhost:3000/celsius-to-fahrenheit?temperature=20
         app.get("/celsius-to-fahrenheit",(req,res)=>{
             let temperature = parseFloat(req.query.temperature);
              let fahrenheit = (temperature * 9/5) + 32;
            res.send("Result " + fahrenheit + " Fahrenheit");

          })

         //Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.
           //API Call: http://localhost:3000/monthly-salary?hourlyWage=2000&totalHours=160
          app.get("/monthly-salary",(req,res)=>{
             let hourlyWage = parseFloat(req.query.hourlyWage);
              let totalHours = parseFloat(req.query.totalHours);
              let monthlySalary = hourlyWage * totalHours;
            res.send("Your monthly salary is ₹" + monthlySalary);

          })
        




app.listen(PORT,() =>{
  console.log("Server is running on http://localhost:" + PORT);
})