import { SmugMug } from './SmugMug.js';
import { SmugMugBase } from './SmugMugBase.js';

export class User extends SmugMugBase {

  constructor(obj: SmugMugResponse) {
    super(obj);
  }

  static byNickName(nickName: string): Promise<User> {
    return SmugMug.request(`/api/v2/user/${nickName}`);
  }

  static authenticatedUser(): Promise<User> {
    return SmugMug.request(`/api/v2!authuser`);
  }
}