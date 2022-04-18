import https from 'https';
import oauth from 'oauth';

class SmugMug {
  private oauthToken: string;
  private oauthTokenSecret: string;
  private oAuth: any;

  constructor(apiKey: string, apiSecret: string, oauthToken: string, oauthTokenSecret: string) {
    this.oauthToken = oauthToken;
    this.oauthTokenSecret = oauthTokenSecret;

    this.oAuth = new oauth.OAuth(
      'https://api.smugmug.com/services/oauth/1.0a/getRequestToken',
      'https://api.smugmug.com/services/oauth/1.0a/getAccessToken',
      apiKey,
      apiSecret,
      '1.0A',
      null,
      'HMAC-SHA1',
      null,
      {"Accept": "application/json"}
    );
    console.log(this.oAuth);
  }
}

new SmugMug('abc','def','ghi','jkl');