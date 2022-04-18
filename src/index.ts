import https from 'https';
import oauth from 'oauth';

class SmugMug {
  private static instance: SmugMug;
  private oauthToken: string;
  private oauthTokenSecret: string;
  private oAuth: any;

  constructor(apiKey: string, apiSecret: string, oauthToken: string, oauthTokenSecret: string) {
    if (SmugMug.instance) {
      throw new Error("Error: already instantiated. Use getInstance() instead");
    }
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
    SmugMug.instance = this;
  }

  public static getInstance(): SmugMug {
    if (!SmugMug.instance) {
      throw new Error("Error: not yet instantiated. Use constructor instead");
    }
    return SmugMug.instance;
  }
}

new SmugMug('abc','def','ghi','jkl');
new SmugMug('abc','def','ghi','jkl');