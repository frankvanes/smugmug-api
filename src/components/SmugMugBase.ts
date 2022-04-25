import { UserProfile } from './UserProfile.js';

export class SmugMugBase {
  private data: SmugMugObject;

  public constructor(obj: SmugMugResponse) {
    this.data = (obj as any)[obj.Locator];
  }

  //private retrieveUris() {

  //}
}