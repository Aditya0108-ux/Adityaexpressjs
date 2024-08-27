let express = require('express');
let app = express();
let PORT = 3000;

/* AirFlow Task Management System

Objective
Airflow is a company that is trying to create a task management system for its users. In this system, you need to add tasks, edit the priority and text of tasks, delete tasks, read the current state of tasks, sort tasks by priority, and filter tasks by priority. */

let tasks = [
  { taskId: 1, text: 'Fix bug #101', priority: 2 },
  { taskId: 2, text: 'Implement feature #202', priority: 1 },
  { taskId: 3, text: 'Write documentation', priority: 3 }
];

/* Endpoint 1. Add a Task to the Task List
http://localhost:3000/tasks/add?taskId=4&text=Review%20code&priority=1 */

function addTask(taskId , text , priority){
     let task = {taskId , text , priority};
      tasks.push(task);
      return tasks;
}

app.get('/tasks/add', ( req , res) => {
        let taskId = parseInt(req.query.taskId);
        let task = req.query.text;
       let priority = parseInt(req.query.priority);
        let result = addTask(taskId , task , priority);
        res.json({tasks : result});
})

/* Endpoint 2. Read All Tasks in the Task List
http://localhost:3000/tasks */

function readAllTasks(){
  return tasks;
}

app.get('/tasks',(req , res) => {
         let result = readAllTasks(tasks);
           res.json(result);
})

/* Endpoint 3. Sort Tasks by Priority
 http://localhost:3000/tasks/sort-by-priority */

function sortByPriority(task1,task2){
     return task1.priority - task2.priority;
}

app.get('/tasks/sort-by-priority', (req , res) => {
        let taskCopy = tasks.slice();
        taskCopy.sort(sortByPriority);
         res.json({tasks : taskCopy});
})

/* Endpoint 4. Edit Task Priority
http://localhost:3000/tasks/edit-priority?taskId=1&priority=1 */

function editTaskPriority(taskId , priority){
         for(let i=0 ; i<tasks.length; i++){
            if(tasks[i].taskId === taskId){
                tasks[i].priority = priority;
                break;
            }
         }
  return tasks;
}

app.get('/tasks/edit-priority', (req , res) => {
       let taskId = parseInt(req.query.taskId);
        let priority = parseInt(req.query.priority);
         let tasks = editTaskPriority(taskId, priority);
          res.json({tasks});
})

/* Endpoint 5. Edit/Update Task Text
http://localhost:3000/tasks/edit-text?taskId=3&text=Update%20documentation */

function updateTaskText(taskId , text){
      for( let i=0; i<tasks.length; i++){
        if(tasks[i].taskId === taskId){
          tasks[i].text = text;
           break;
        }
      
      }
  return tasks;
}

app.get('/tasks/edit-text', (req , res) => {
          let taskId = parseInt(req.query.taskId);
          let task = req.query.text;
            let tasks = updateTaskText(taskId , task);
            res.json({tasks});
})

/* Endpoint 6. Delete a Task from the Task List
http://localhost:3000/tasks/delete?taskId=2 */

function deleteTaskFromTaskList(task,taskId){
         return task.taskId !== taskId;
}

app.get('/tasks/delete', (req , res) => {
            let taskId = parseInt(req.query.taskId);
             let result = tasks.filter(task => deleteTaskFromTaskList(task,taskId));
                res.json({tasks : result});
})

/* Endpoint 7. Filter Tasks by Priority
http://localhost:3000/tasks/filter-by-priority?priority=1 */

function filterTaskByPriority(task , priority){
     return task.priority === priority;
}

app.get('/tasks/filter-by-priority',(req , res) => {
       let priority = parseInt(req.query.priority);
      let result = tasks.filter(task => filterTaskByPriority(task, priority));
       res.json({tasks : result});
})


app.listen(PORT , () => {
  console.log("Server is running on http://localhost:" + PORT);
})
