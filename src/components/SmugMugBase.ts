import { UserProfile } from "./UserProfile.js";
import { SmugMug } from "./SmugMug.js";

export class SmugMugBase {
  private data: SmugMugObject;
  private Uris: object;

  public constructor(obj: SmugMugResponse) {
    this.data = (obj as any)[obj.Locator];
    this.Uris = this.data.Uris;

    Object.assign(this, (obj as any)[obj.Locator]);
  }

  // Naive implementation of retrieveUri. Must be improved and extended to retrieveUris(names[]).
  private retrieveUri(name: string): Promise<SmugMugResponse> | {} {
    // Retrieve the object from the cache if it was already fetched before.
    if (
      this.Uris &&
      (this.Uris as any)[name] &&
      (this.Uris as any)[name][name]
    ) {
      return (this.Uris as any)[name][name];
      // Retrieve the object from the API and store it in the cache if not fetched before.
    } else if (this.Uris && (this.Uris as any)[name]) {
      (this.Uris as any)[name][name] = SmugMug.request(
        (this.Uris as any)[name]["Uri"]
      );
      return (this.Uris as any)[name][name];
      // Return an empty object when the Uri does not exist
    } else {
      console.warn(
        `[WARNING]: Retrieving Uri '${name}' for '${
          (this.data as any)["Uri"]
        }' failed: No such Uri.`
      );
      return {};
    }
  }
}
