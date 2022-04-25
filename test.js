//const SmugMug = require('./dist/index.js').SmugMug;
const sm = require('./dist/index.js');
const SmugMug = sm.SmugMug;
const smugmug = new SmugMug('2Wz5GDbPxJcnv3tZ5vCZFV9BSkHwmmNs','STPdJqrpVgChbmzbK2f87bcWBvD6MQSZNwpwSRL5RD7wgsHXBQmjCpgdzC8zvpC6','fj3vXM2BcRbwCsG6mKxpkFmmSQxLqGzs','ccX2785pz2T9QwFfJf9ztWsWqj5Gpz7wJ4gCwCkc56863qCWcdLHs8sxG3KgqSgL');

//SmugMug.request("user/frankvanes!profile?_verbosity=3").then((res) => {
//  
//  console.log(res);
//})

sm.UserProfile.byNickName('frankvanes').then((res) => {
  console.log(res);
});