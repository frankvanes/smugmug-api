import { SmugMug, SmugMugBase } from ".";
import { SmugMugResponse } from "../types";

export class UserProfile extends SmugMugBase {
  constructor(obj: SmugMugResponse) {
    super(obj);
  }

  static byNickName(nickName: string): Promise<UserProfile> {
    return SmugMug.request(`/api/v2/user/${nickName}!profile`);
  }
}
