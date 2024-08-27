let express = require('express');
let app = express();
let port = 3000;

//Create an endpoint that takes a name as a query parameter and returns it in lowercase.
//API Call: http://localhost:3000/whisper?name=John
app.get('/whisper',(req,res) => {
   let name = (req.query.name).toLowerCase();
   res.send(name);
})

//Create an endpoint that takes companyName and productName as query parameters and returns the full product name.
//API Call: http://localhost:3000/full-product-name?companyName=Apple&productName=iPhone
app.get('/fullProductName',(req,res) => {
   let companyName = (req.query.companyName);
   let productName = (req.query.productName);
   let fullProductName = companyName + " " + productName;
   res.send(fullProductName);
})

//Create an endpoint that takes month and year as query parameters and returns a concatenated date in the format 'Month/Year'.
//API Call: http://localhost:3000/date?month=05&year=2024
app.get('/date',(req,res) => {
   let month = (req.query.month);
   let year = (req.query.year);
   let fullformattedDate = month + "/" + year;
   res.send(fullformattedDate);
})

//Create an endpoint that takes your home city as a query parameter and returns a greeting in the format 'You live in <city name>'.
//API Call: http://localhost:3000/greet?city=Kolkata
app.get('/greet',(req,res) => {
   let city = (req.query.city);
   let greeting = "You live in " + city;
   res.send(greeting);
})

//Create an endpoint that takes capital, and country as query parameters and returns a formatted sentence in the format “[capital] is the capital of [country].”
//API Call: http://localhost:3000/capital?capital=Delhi&country=India
app.get('/capital',(req,res) => {
   let capital = (req.query.capital);
   let country = (req.query.country);
   let countryCapital = capital + " is the capital of " + country;
   res.send(countryCapital);
})

//Create an endpoint that takes firstName, lastName, and domain as query parameters and returns a formatted office email address.
//API Call: http://localhost:3000/email?firstName=aman&lastName=ranjan&domain=company.com
app.get('/email',(req,res) => {
   let firstName = (req.query.firstName);
   let lastName = (req.query.lastName);
   let domain = req.query.domain;
  let email = firstName + "." + lastName + "@" + domain;
   res.send(email);
})


app.listen(port,() => {
  console.log("Server is running on http://localhost:" + port);
})