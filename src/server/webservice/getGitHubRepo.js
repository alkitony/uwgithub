const reqProm = require('request-promise');

const GITHUBURL = 'https://api.github.com/repositories?since=';
const REPOPAGES = 3;
const REPOSINCE = 1000;
const GITREPOURL = `${GITHUBURL}${REPOSINCE}`;

function returnFollowers(getURL, finalUsers, count) {
  console.log('I am in the return Followers right before the return statement');
  console.log(getURL);
  console.log(finalUsers);
  console.log(count);
  return reqProm({
    url: getURL,
    headers: { 'User-Agent': 'anotheruwgithub' },
    resolveWithFullResponse: true,
    json: true
  })
    .then((response) => {
      console.log('I am in the .then of followers');
      console.log(response);
      const newFinalUsers = [...finalUsers];
      for (let k = 0; ( k < response.body.length || k < 3 ); k++) {
        newFinalUsers.followers.push(response.body[k].login);          
      }
      newFinalUsers[count].followers_cnt = response.body.length;
      console.log(`This is the count of the repoData ${newRepoData.length}`);
      const newCount = count + 1;
      if (newCount < 9) {
        const newURL = finalUsers[newCount].followers_api;
        returnFollowers({getUrl: newURL, finalUsers: newFinalUsers, count: newCount });         
      } else {
        console.log('This is the final users with followers information');
        console.log(finalUsers);
        return newFinalUsers;
      }
    })
    .catch((error) => {
      console.log('I am in the catch of the return followers');
      console.log(error);
    });
}

function returnRepos(getURL, repoData, count) {
  return reqProm({
    url: `${getURL}`,
    headers: { 'User-Agent': 'uwgithub' },
    resolveWithFullResponse: true,
    json: true
  })
    .then((response) => {
      if (count > 0) {
        const newRepoData = [...repoData, ...response.body];
        console.log(`This is the count of the repoData ${newRepoData.length}`);
        const newURL = response.headers.link.split('<')[1].split('>')[0];
        const newCount = count - 1;
        returnRepos(newURL, newRepoData, newCount);
      } else {
        console.log(`This is the final count of the repoData ${repoData.length}`);
        const finalRepo = [];
        const uniqueLogin = {};
        for (let i = 0; i < repoData.length; i++) {
          if (repoData[i].owner.login[0] === 'a' || repoData[i].owner.login[0] === 'A') {
            if (!uniqueLogin[repoData[i].owner.login]) {
              uniqueLogin[repoData[i].owner.login] = 1;
              finalRepo.push(
                {
                  id: repoData[i].owner.id,
                  login: repoData[i].owner.login,
                  followers: [],
                  followers_api: repoData[i].owner.followers_url,
                  followers_url: 'https://github.com/'+repoData[i].owner.login+'?tab=followers',
                  followers_cnt: 0
                }
              );
            }
          }
          if (Object.keys(uniqueLogin).length === 9) {
            break;
          }
        }
        console.log(finalRepo[finalRepo.length - 1].followers_api,
          finalRepo,
          finalRepo.length - 1);
        const finalUsers = returnFollowers(finalRepo[0].followers_api,
          finalRepo,
          0).then(response => response);
        console.log('This is response from final user', finalUsers);
        return finalUsers;
      }
    })
    .catch((error) => {
      console.log('I am in the catch of the returnRepos');
      console.log(error);
    });
}

function getGitUsers() {
  return returnRepos(GITREPOURL, [], REPOPAGES);
    // .then(returnFollowers);
}

module.exports = getGitUsers;

// function returnRepos() {
//   console.log('I am here in the returnRepos');
//   // Recursively do 10 GitHub API calls starting at Repo #1000.
//   // This will return back 1000 Repos
//   // The 1000 Repos  will be used to gather login names that start with 'a'/'A'.
//   const count = 3;
//   const repoData = [];
//   const repoSince = 1000;
//   const getURL = `${GITHUBURL}${repoSince}`;
//   return reqPromCommand(getURL, repoData, count)
// .then((resp) => {
//   if (count > 0) {
//     console.log(resp);
//     repoData = [...repoData, ...resp.body];
//     console.log(`This is the count of the repoData ${repoData.length}`);
//     getRequest.url = resp.headers.link.split('<')[1].split('>')[0];
//     count -= 1;
//     console.log(count);
//     console.log(repoData);
//     console.log(getRequest);
//     reqProm(getRequest);
//   } else {
//     console.log(`I am after the if count. it is ${count}`);
//     console.log(repoData);
//     return repoData;
//   }
// })
// .catch((error) => {
//   console.log('I am in the catch for returnRepos');
//   // gitHubData.message = e;
//   // gitHubData.statusCode = 'Error';
// // adding an error function
// });
// }
// console.log('I am here right before the module.exports');

// async function reqPromCommand(url) {
//   console.log('I am in the async function');
//   await reqProm(url)
//     .then((response) => {
//       console.log('I am in the then of the reqPromcommand');
//       return response;
//     })
//     .catch((error) => {
//       console.log('I am in the catch of the reqPromcommand');
//       // gitHubData.message = e;
//       // gitHubData.statusCode = 'Error';
//     });
// }
