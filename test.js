//const SmugMug = require('./dist/index.js').SmugMug;
const sm = require('./dist/index.js');
const SmugMug = sm.SmugMug;
const smugmug = new SmugMug();

//SmugMug.request("user/frankvanes!profile?_verbosity=3").then((res) => {
//  
//  console.log(res);
//})

sm.UserProfile.byNickName('frankvanes').then((res) => {
  console.log(res);
});