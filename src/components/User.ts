import { SmugMug } from './SmugMug.js';
import { SmugMugBase } from './SmugMugBase.js';

export class User extends SmugMugBase {

  constructor(obj: SmugMugResponse) {
    super(obj);
  }

  public userProfile() {
    return true;
  }

  static byNickName(nickName: string): Promise<SmugMugBase> {
    return SmugMug.request(`/api/v2/user/${nickName}`);
  }

  static authenticatedUser(): Promise<SmugMugBase> {
    return SmugMug.request(`/api/v2!authuser`);
  }

  static rootNodeForUser(nickName: string): Promise<SmugMugBase> {
    return SmugMug.request(`/api/v2/user/${nickName}!rootnode`);
  }

  // TODO: should return an array of users instead of a user with an array of data objects
  static search(searchString: string): Promise<SmugMugBase> {
    return SmugMug.request(`/api/v2/user!search?q=${searchString}`);
  }
}