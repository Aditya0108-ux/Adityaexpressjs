let express = require("express");
let app = express();
let PORT = 3000;

let githubPublicData = {
  username: "ankit123",
  fullName: "Ankit Kumar",
  email : "ankit@gmail.com",
  repositories : 24,
  gists : 12 ,
  joinedOn : "Sept 2018" ,
}

//Exercise 1: Define the function getProfileUrl to return the GitHub profile URL of the user.
//Sample Endpoint: /github-profile

function getProfileUrl(githubPublicData){
  let profileUrl = "https://github.com/" + githubPublicData.username;
  return profileUrl;
}

app.get("/github-profile" , (req ,res) => {
     let profileUrl = getProfileUrl(githubPublicData);
      res.json({profileUrl : profileUrl});
  
})

//Exercise 2 : Define the function getPublicEmail to return the GitHub email of the user.
// Sample Endpoint: http://localhost:3000/github-public-email

function getPublicEmail(githubPublicData){
    return githubPublicData.email;
}

app.get("/github-public-email" , ( req , res) => {
           let email = getPublicEmail(githubPublicData);
             res.json({publicEmail : email});
  
})

// Exercise 3 : Define the function getReposCount to return the number of repositories the user has.
//Sample Endpoint: http://localhost:3000/github-repos-count

function getReposCount(githubPublicData){
      return githubPublicData.repositories;
}

app.get("/github-repos-count",( req , res) => {
     let repoCount = getReposCount(githubPublicData);
     res.json({reposCount : repoCount});
})

//Exercise 4: Declare a GET endpoint /github-gists-count to use the getGistsCount function.
//Sample Endpoint: http://localhost:3000/github-gists-count

function getGistsCount(githubPublicData){
       return githubPublicData.gists;
}

app.get("/github-gists-count", ( req , res) => {
     let gistsCount = getGistsCount(githubPublicData);
     res.json({gistsCount : gistsCount});
})

//Exercise 5: Define the function getUserBio to return the user's bio.
//Sample Endpoint: http://localhost:3000/github-user-bio

function getUserBio(githubPublicData){
   return {
    fullName : githubPublicData.fullName,
     joinedOn : githubPublicData.joinedOn,
     email :  githubPublicData.email,
   }
}

app.get("/github-user-bio", ( req , res) => {
 let userBio = getUserBio(githubPublicData);
 res.json(userBio);
})

//Exercise 6: Define the function getRepoUrl to return the URL of a specific repository.
//Sample Endpoint: http://localhost:3000/github-repo-url?repoName=backend_course
function getRepoUrl(githubPublicData,repoName){
  let profileUrl = getProfileUrl(githubPublicData);
  return profileUrl + "/" + repoName;
}

app.get("/github-repo-url",( req , res) => {
  let repoName = req.query.repoName;
  let repoUrl = getRepoUrl(githubPublicData,repoName);
 res.json({repoUrl : repoUrl});
})



app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
})