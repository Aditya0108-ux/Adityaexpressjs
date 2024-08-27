//operators
let express = require("express");
let app = express();
let PORT = 3000;

   //Create an endpoint that takes distance1 and distance2 as query parameters and returns the total distance covered by adding two trips.
  //API Call: <http://localhost:3000/total-distance?distance1=5.5&distance2=10.2>
app.get("/total-distance",(req,res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let total_distance = distance1 + distance2;
  res.send((total_distance).toString());
  
});

//Create an endpoint that takes time1, time2, and time3 as query parameters and returns the total time spent on multiple activities.
//API Call: <http://localhost:3000/total-time?time1=1.5&time2=2.0&time3=0.5>

app.get("/total-time",(req,res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let total_time = time1 + time2 + time3;
  res.send((total_time).toString());

});

//Create an endpoint that takes totalDistance and totalTime as query parameters and returns the average speed.
//API Call: <http://localhost:3000/average-speed?totalDistance=150&totalTime=3>
app.get("/average-speed",(req,res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);
  let average_speed = totalDistance / totalTime;
  res.send((average_speed).toString());

});

//Create an endpoint that takes distance and speed as query parameters and returns the estimated time of arrival (ETA).
//API Call: <http://localhost:3000/eta?distance=120&speed=60>
app.get("/eta",(req,res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);
  let eta = distance/speed;
  res.send((eta).toString());

});

//Create an endpoint that takes duration1, duration2, and caloriesPerMinute as query parameters and returns the total calories burned based on activity duration and calories burned per minute.
//API Call: <http://localhost:3000/total-calories?duration1=30&duration2=45&caloriesPerMinute=10>
app.get("/total-calories",(req,res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);
  let totalCalories = (duration1+duration2)*caloriesPerMinute
  res.send((totalCalories).toString());

});

 //Create an endpoint that takes principal, rate, and time as query parameters and returns the interest earned on a savings account.
//API Call: <http://localhost:3000/interest-earned?principal=1000&rate=5&time=2>
app.get("/interest-earned",(req,res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let interestEarned = (principal*rate*time)/100
  res.send((interestEarned).toString());

});








app.listen(PORT,() => {
  console.log("Server is running on http://localhost:" + PORT);
})