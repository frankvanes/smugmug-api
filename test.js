const SmugMug = require('./dist/index.js');
const secrets = require('./.secret.settings.json');

const {apiKey, apiSecret, oauthToken, oauthTokenSecret} = secrets;
const smugmug = new SmugMug.SmugMug(apiKey, apiSecret, oauthToken, oauthTokenSecret);

SmugMug.UserProfile.byNickName('frankvanes').then((res) => {
  console.log(res);
});