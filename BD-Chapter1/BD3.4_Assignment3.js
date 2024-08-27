let express = require('express');
let app = express();
let cors = require('cors');
app.use(cors());
let PORT = 3000;

/* Fitness Tracker

In this lesson, we will cover how to create a Fitness Tracker Backend using various JavaScript array methods. By the end of this lesson, you will have learned how to:

Add new activities to a tracker.

Sort activities by duration.

Filter activities by type.

Calculate the total calories burned.

Update the duration of an activity by its ID.

Delete an activity by its ID.

Delete all activities of a specific type. */

let activities = [
  { activityId: 1, type: 'Running', duration: 30, caloriesBurned: 300 },
  { activityId: 2, type: 'Swimming', duration: 45, caloriesBurned: 400 },
  { activityId: 3, type: 'Cycling', duration: 60, caloriesBurned: 500 }
];

/* Endpoint 1: Add an Activity
http://localhost:3000/activities/add?activityId=4&type=Walking&duration=20&caloriesBurned=150 */
function addAnActivity(activityId, type , duration , caloriesBurned){
      let activity = {activityId , type , duration , caloriesBurned};
      activities.push(activity);
       return activities;
}

app.get('/activities/add', (req , res) => {
      let activityId = parseInt(req.query.activityId);
      let type = req.query.type;
      let duration = parseInt(req.query.duration);
      let caloriesBurned = parseInt(req.query.caloriesBurned);
       let activities = addAnActivity(activityId, type , duration , caloriesBurned);

        res.send({activities});
      
})

/* Endpoint 2: Sort Activities by Duration
http://localhost:3000/activities/sort-by-duration */

function sortActivityByDuration(activity1,activity2){
  return activity1.duration - activity2.duration;
}

app.get('/activities/sort-by-duration', ( req , res) => {
      let activitiesCopy = activities.slice(); activitiesCopy.sort(sortActivityByDuration);
      res.json({activities});
})

/* Endpoint 3: Filter Activities by Type
http://localhost:3000/activities/filter-by-type?type=Running */

function filterByType(activity , type){
      return activity.type === type;
}

app.get('/activities/filter-by-type',( req , res) => {
        let type = req.query.type;
        let result = activities.filter(activity => filterByType(activity, type));
          res.json({activities : result});
})

/* Endpoint 4: Calculate Total Calories Burned
http://localhost:3000/activities/total-calories */

function totalCalories(activities){
  let total = 0;
    for(let i=0; i<activities.length; i++){
       total = total + activities[i].caloriesBurned;
    }
  return total;
}

app.get('/activities/total-calories', (req , res) => {
        let totalCaloriesBurned = totalCalories(activities);
          res.json({totalCaloriesBurned});
})

/* Endpoint 5: Update Activity Duration by ID
http://localhost:3000/activities/update-duration?activityId=1&duration=35 */

function updateActivityDurationById(activityId,duration){
     for(let i=0; i<activities.length; i++){
        if(activities[i].activityId === activityId){
             activities[i].duration = duration;
            break;
        }
     }
        return activities;
}

app.get('/activities/update-duration',(req , res) => {
      let activityId = parseInt(req.query.activityId);
      let duration = parseInt(req.query.duration);
      let activities = updateActivityDurationById(activityId,duration);
      res.json({activities});
})

/* Endpoint 6: Delete Activity by ID
http://localhost:3000/activities/delete?activityId=2 */

function deleteActivityById(activityId){
     return activities.filter(activity => activity.activityId != activityId);
}

app.get('/activities/delete', ( req , res) => {
        let activityId = parseInt(req.query.activityId);
         let activities = deleteActivityById(activityId);
            res.json({activities});
})

/* Endpoint 7: Delete Activities by Type
http://localhost:3000/activities/delete-by-type?type=Running */

function deleteActivitiesByType(type){
   return activities.filter(activity => activity.type != type);
}

app.get('/activities/delete-by-type', (req , res) => {
       let type = req.query.type;
       let activities = deleteActivitiesByType(type);
         res.json({activities});
})



app.listen(PORT , () => {
  console.log("Server is running on http://localhost:" + PORT);
})