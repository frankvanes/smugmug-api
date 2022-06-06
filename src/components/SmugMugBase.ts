import { SmugMug } from ".";
import { LocatorType, UrisType, SmugMugResponse } from "../types";

export class SmugMugBase {
  private uri: string | undefined;
  private webUri: string | undefined;
  private uriDescription: string | undefined;
  private uris: UrisType | undefined;
  private responseLevel: string | undefined;

  public constructor(obj: SmugMugResponse) {
    const data = obj[obj.Locator as LocatorType];
    this.uri = data?.Uri;
    this.webUri = data?.WebUri;
    this.uriDescription = data?.UriDescription;
    this.responseLevel = data?.ResponseLevel;
    this.uris = data?.Uris;
  }

  // Naive implementation of retrieveUri. Must be improved and extended to retrieveUris(names[]).
  private retrieveUri(name: string): Promise<SmugMugResponse> | object {
    // Retrieve the object from the cache if it was already fetched before.
    if (this.uris && this.uris[name] && (this.uris[name] as any)[name]) {
      return this.uris[name][name];
      // Retrieve the object from the API and store it in the cache if not fetched before.
    } else if (this.uris && this.uris[name]) {
      (this.uris[name] as any)[name] = SmugMug.request(this.uris[name]["Uri"]);
      return this.uris[name][name];
      // Return an empty object when the Uri does not exist
    } else {
      console.warn(
        `[WARNING]: Retrieving Uri '${name}' for '${this.uri}' failed: No such Uri.`
      );
      return {};
    }
  }
}
