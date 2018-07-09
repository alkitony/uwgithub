const reqProm = require('request-promise');

const GITHUBURL = 'https://api.github.com/repositories?since=';

// the return github object it caontains data, message, statusCode
const gitHubData = {
  data: [],
  message: '',
  statusCode: ''
};

async function reqPromCommand(url) {
  console.log("I am in the async function");
  await reqProm(url)
    .then((response) => {
      console.log('I am in the then of the fcommand');
      return response;
    })
    .catch((e) => {
      console.log('I am in the catch of the fcommand');
      gitHubData.message = e;
      gitHubData.statusCode = 'Error';
    });
}

function regPromandRtnData(url) {
  console.log('I am here in fetchandData');
  let count = 1; 
  reqPromCommand(url)
    .then((resp) => {

      if (count < 11 ) {
        get the response
        same the data
        get link to next set data
        modify url
        count++
        regPromandRtnData(url
      }

      return the
      console.log('I am in the frd.then');
      console.log(resp);
      const temp = resp;
      return temp;
    })
    .catch((e) => {
      console.log('I am in the frd.catch');
      gitHubData.message = e;
      gitHubData.statusCode = 'Error';
    // adding an error function
    });
  
}

function gatherRepoData() {
  let repoData;
  let repoSince = 1000;
  let tempArray = [];
  for (let i = 0; i < 10; i++) {
    if (gitHubData.statusCode !== 'Error') {
      tempArray = regPromandRtnData(
        {
          url: `${GITHUBURL}${repoSince}`,
          headers: { 'User-Agent': 'uwgithub' },
          json: true
        }
      );
      repoData = [...tempArray];
      repoSince = tempArray[tempArray.length].id;
    } else {
      break;
    }
  }
  return repoData;
}

function buildGitHubData() {
  const repoInfo = gatherRepoData();
  let followerInfo;
  const tempObject = {
    "id": 0,
    "login": "",
    "avatar_url": "",
    "followers": [],
    "followers_api": "",
    "followers_url": "",
    "followers_cnt": 0
  };

  if (gitHubData.statusCode !== 'Error') {
    for (let i = 0; i < repoInfo.length; i++) {
      if (repoInfo[i].owner.login[0] === 'a' || repoInfo[i].owner.login[0] === 'A') {
        // Fetch follower information
        followerInfo = regPromandRtnData(
          {
            url: repoInfo[i].owner.followers_url,
            headers: { 'User-Agent': 'uwgithub' },
            json: true
          }
        );

        // Check if any of the api produce an error
        if (gitHubData.statusCode !== 'Error') {
          // populate tempObject
          tempObject.numOfFollower = followerInfo.length;
          if (followerInfo.length > 0) {
            for (let k = 0; i < followerInfo.length; k++) {
              tempObject.followers.push(followerInfo[k].login);
            }
          }
          tempObject.login = repoInfo[i].owner.login;
          tempObject.avatar = repoInfo[i].owner.avatar;

          // Save tempObject to GitHubData
          gitHubData.data.push(tempObject);

          // Reset tempObject
          tempObject.login = '';
          tempObject.avatar = '';
          tempObject.numOfFollower = 0;
          tempObject.followers = [];
        } else {
          break;
        }
      }
    }
  }
  return gitHubData;
}

module.exports = buildGitHubData;
