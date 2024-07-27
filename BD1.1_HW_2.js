let express = require("express");
let app = express();
let port = 3000;

//1.send a custom commit message
//API Call: http://localhost:3000/custom-commit?type=feat&message=Added%20new%20API%20endpoint
app.get("/custom-commit",(req,res)=>{
  let type = req.query.type;
  let message = req.query.message;
  let commitMessage = type + ": " + message;
  res.send(commitMessage);
})

//2.generate certificate for students
//API Call: http://localhost:3000/certificate?firstName=Amit&lastName=Ranjan&courseName=BytR
  app.get("/certificate",(req,res)=>{
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let courseName = req.query.courseName;
    let certificate = "This certification is awarded to " + firstName + " " + lastName + " for completing the course " + courseName;
    res.send(certificate);
  })

//3.Configure a custom out-of-office message
//API Call: http://localhost:3000/autoreply?startMonth=May&endMonth=June
  app.get("/autoreply",(req,res)=>{
    let startMonth = req.query.startMonth;
    let endMonth = req.query.endMonth;
    let sentence = "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " + startMonth + " to " + endMonth + ". " +  "Your enquiry will be resolved by another colleague.";
    
    res.send(sentence);
  })

//4.Send a secure URL
//API Call: http://localhost:3000/secureurl?domain=app.invact.com
  app.get("/secureurl",(req,res)=>{
    let domain = req.query.domain;
    let result = "https://" + domain;
    res.send(result);
  })

//5.Send a verification OTP
//API Call: http://localhost:3000/sendotp?otpCode=1234
  app.get("/sendotp",(req,res)=>{
    let otpCode = req.query.otpCode;
    let result = "Your OTP for account verification is " + otpCode + "." + " Do not share this with anyone"
    res.send(result);
  })

//6.Send a Welcome mail to new user.
  //API Call: http://localhost:3000/welcome?firstName=Amit&email=amit@gmail.com
  app.get("/welcome",(req,res)=>{
    let firstName = req.query.firstName;
    let email = req.query.email;
    let result = "Hey " + firstName + ". We're excited to have you here, we'll send future notifications to your registered mail " + "(" + email + ")."; 
    res.send(result);
  })

//7.Generate a github profile url
 //API Call: http://localhost:3000/github-profile?userName=ankitkumar123
  app.get("/github-profile",(req,res)=>{
    let username = req.query.username;
    let result = " https://github.com/" + username;
    res.send(result);
  })

//8.convert text into CSV row format
  //API Call: http://localhost:3000/text-to-csv?id=1254&email=example@gmail.com&rollNumber=24
   app.get("/text-to-csv",(req,res)=>{
     let id = req.query.id;
     let email = req.query.email;
     let rollNumber = req.query.rollNumber;
     let result = id + "," + email + "," + rollNumber;
     res.send(result);
   })


app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
})
