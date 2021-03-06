const express = require('express');
const cors = require('cors');
const getGitUsers = require('./webservice/getGithubRepo');

const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Content-Type', 'application/json')
  next();
};

app.use(express.static('dist'));
app.use(cors());
app.use(allowCrossDomain)

console.log('about to execute getGitUsers');
const finalGitUsers = getGitUsers().then(response => response);
console.log(finalGitUsers);

// let gitHubData
// let mystuff = [{key: 'hey it worked'}];
// request({
//   url: 'https://api.github.com/repositories?since=1000',
//   json: true,
//   headers: { 'user-agent': 'tonys-app' }
// }, (error, response, body) => { gitHubData = response.body } );

// const gitRepoData = returnRepo();
// const gitHubData = buildGithubData(gitRepoData);

// function getGitHubData() {
//   gitHubData = buildGithubData();
// }
// setInterval(getGitHubData, 240000);

// const GITHUBURL = 'https://api.github.com/repositories?since=';
// const count = 3;
// const repoData = [];
// const repoSince = 1000;
// const getURL = `${GITHUBURL}${repoSince}`;
const repoDataDisplay = [
  {
    "id": 1008,
    "login": "andykent",
    "avatar_url": "https://avatars3.githubusercontent.com/u/614?v=4",
    "followers": ["sr", "matthewford", "dctanner", "pablete", "jaikoo"],
    "followers_api": "https://api.github.com/users/andykent/followers",
    "followers_url": "https://github.com/andykent?tab=followers",
    "followers_cnt": 71
  },
  {
    "id": 1043,
    "login": "anildigital",
    "avatar_url": "https://avatars0.githubusercontent.com/u/266?v=4",
    "followers": ["gnufied", "asanghi", "mmmurf", "rahul286", "shanlalit"],
    "followers_api": "https://api.github.com/users/anildigital/followers",
    "followers_url": "https://github.com/anildigital?tab=followers",
    "followers_cnt": 85
  },
  {
    "id": 1124,
    "login": "alex",
    "avatar_url": "https://avatars2.githubusercontent.com/u/772?v=4",
    "followers": ["defunkt", "brosner", "vic", "scotu", "statik"],
    "followers_api": "https://api.github.com/users/alex/followers",
    "followers_url": "https://github.com/alex?tab=followers",
    "followers_cnt": 4300
  },
  {
    "id": 1364,
    "login": "aharper",
    "avatar_url": "https://avatars3.githubusercontent.com/u/1002?v=4",
    "followers": ["ahmetabdi", "angusshire"],
    "followers_api": "https://api.github.com/users/aharper/followers",
    "followers_url": "https://github.com/aharper?tab=followers",
    "followers_cnt": 2
  },
  {
    "id": 1444,
    "login": "aanand",
    "avatar_url": "https://avatars2.githubusercontent.com/u/1062?v=4",
    "followers": ["macournoyer", "danielharan", "heycarsten", "Norgg", "delano"],
    "followers_api": "https://api.github.com/users/aanand/followers",
    "followers_url": "https://github.com/aanand?tab=followers",
    "followers_cnt": 375
  },
  {
    "id": 1469,
    "login": "alce",
    "avatar_url": "https://avatars1.githubusercontent.com/u/1133?v=4",
    "followers": ["Sirsksk", "angusshire", "robertomiranda", "rlara", "jyr"],
    "followers_api": "https://api.github.com/users/alce/followers",
    "followers_url": "https://github.com/alce?tab=followers",
    "followers_cnt": 6
  },
  {
    "id": 1584,
    "login": "AndrewO",
    "avatar_url": "https://avatars0.githubusercontent.com/u/550?v=4",
    "followers": ["bakpa79", "dmarg", "minsle", "kauegimenes", "bklynate"],
    "followers_api": "https://api.github.com/users/AndrewO/followers",
    "followers_url": "https://github.com/AndrewO?tab=followers",
    "followers_cnt": 30
  },
  {
    "id": 1674,
    "login": "ask",
    "avatar_url": "https://avatars2.githubusercontent.com/u/1558?v=4",
    "followers": ["AmyLewis", "youmisun", "ShalbafZadeh", "hongduhong", "zhao1532072926"],
    "followers_api": "https://api.github.com/users/ask/followers",
    "followers_url": "https://github.com/ask?tab=followers",
    "followers_cnt": 1200
  },
  {
    "id": 1734,
    "login": "aasm",
    "avatar_url": "https://avatars1.githubusercontent.com/u/1910612?v=4",
    "followers": [],
    "followers_api": "https://api.github.com/users/aasm/followers",
    "followers_url": "https://github.com/aasm?tab=followers",
    "followers_cnt": 0
  }
]

app.get('/api/getGitHubData', (req, res) => res.send(repoDataDisplay));

// });
// app.get('/api/getGitHubData', (req, res) => {
//   returnRepo(getURL, repoData, count)
//     .then((repoData) => {
//       repoDataDisplay = repoData;
//       console.log('In the .then from return repo in index');
//       console.log(typeof repoData);
//       res.send({ repoDataDisplay })
//     });
// });

app.listen(8080, () => console.log('Server is running'));
//   , () => {
//   returnRepo(getURL, repoData, count)
//     .then((repoData) => {
//       repoDataDisplay = repoData;
//       console.log('In the .then from return repo in index');
//       console.log(typeof repoData);
//     });
// }


// .then((repoData) => {
//   console.log('I am here before get');
