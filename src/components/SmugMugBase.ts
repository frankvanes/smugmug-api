import { SmugMug } from "./SmugMug";

export class SmugMugBase {
  private uri: string;
  private webUri: string;
  private uriDescription: string;
  private uris: object;
  private responseLevel: string;

  public constructor(obj: SmugMugResponse) {
    const data = (obj as any)[obj.Locator];
    this.uri = data.Uri;
    this.webUri = data.WebUri;
    this.uriDescription = data.UriDescription;
    this.responseLevel = data.ResponseLevel;
    this.uris = data.Uris;
  }

  // Naive implementation of retrieveUri. Must be improved and extended to retrieveUris(names[]).
  private retrieveUri(name: string): Promise<SmugMugResponse> | object {
    // Retrieve the object from the cache if it was already fetched before.
    if (
      this.uris &&
      (this.uris as any)[name] &&
      (this.uris as any)[name][name]
    ) {
      return (this.uris as any)[name][name];
      // Retrieve the object from the API and store it in the cache if not fetched before.
    } else if (this.uris && (this.uris as any)[name]) {
      (this.uris as any)[name][name] = SmugMug.request(
        (this.uris as any)[name]["Uri"]
      );
      return (this.uris as any)[name][name];
      // Return an empty object when the Uri does not exist
    } else {
      console.warn(
        `[WARNING]: Retrieving Uri '${name}' for '${this.uri}' failed: No such Uri.`
      );
      return {};
    }
  }
}
