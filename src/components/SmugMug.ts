import https from 'https';
import { OAuth } from 'oauth';
import { SmugMugBase } from './SmugMugBase.js';
import { SmugMugFactory } from './SmugMugFactory.js';

interface Request {

}

interface Response {
  Uri: string,
  Locator: string
}

interface HasUris {
  Uris: object[]
}

export class SmugMug {
  private static instance: SmugMug;
  private static BASE_URL = 'https://api.smugmug.com/api/v2/';
  private static PAGE_SIZE = 2;

  private oauthToken: string;
  private oauthTokenSecret: string;
  private oAuth: any;

  constructor(apiKey: string, apiSecret: string, oauthToken: string, oauthTokenSecret: string) {
    if (SmugMug.instance) {
      throw new Error("Error: already instantiated. Use getInstance() instead");
    }
    this.oauthToken = oauthToken;
    this.oauthTokenSecret = oauthTokenSecret;

    this.oAuth = new OAuth(
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

  public static request(url: string, expand = ''): Promise<SmugMugBase> {
    const resourceUrl = SmugMug.BASE_URL + url.replace('/api/v2/','');
    const oAuth = SmugMug.instance.oAuth;
    const expansions = (!expand || !expand.length || url.includes('?')) 
                     ? '' 
                     : '?_expandmethod=inline&_expand=' + (Array.isArray(expand) ? expand.join(',') : expand);
    const params = ((expansions || url.includes('?')) ? '&' : '?') + `count=${SmugMug.PAGE_SIZE}`;
    //console.log(`${resourceUrl}${expansions}`);
    return new Promise(function(resolve, reject) {
      oAuth.get(
        `${resourceUrl}${expansions}${params}`,
        SmugMug.instance.oauthToken,
        SmugMug.instance.oauthTokenSecret,
        function(err:object, data:string, _:object) {
          if (err) return reject(new Error(JSON.stringify(err)));
          const res = JSON.parse(data);

          if (!res) return reject(new Error(`Cannot parse response (URL: ${SmugMug.BASE_URL}${url})`));
          const response = res.Response;
          const expansions = res.Expansions || {};

          resolve(SmugMugFactory.create(response, expansions));
        }
      );
    });
  }

  private static formatObject(obj: Response) {
    return obj as Response;
  }
}