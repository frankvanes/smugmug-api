const SmugMug = require('./dist/index.js');
const secrets = require('./.secret.settings.json');

const {apiKey, apiSecret, oauthToken, oauthTokenSecret} = secrets;
const smugmug = new SmugMug.SmugMug(apiKey, apiSecret, oauthToken, oauthTokenSecret);

SmugMug.User.byNickName('frankvanes').then(async (res) => {
  console.log(res);
  const bio1 = await res.retrieveUri("BioImagea");
  const bio2 = await res.retrieveUri("BioImage");
  //console.log(bio2);
});