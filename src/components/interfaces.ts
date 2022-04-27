interface SmugMugResponse {
  Uri: string;
  UriDescription: string;
  EndpontType: string;
  Locator: string;
  LocatorType: string;
  UserProfile?: SmugMugUserProfile;
}

interface SmugMugObject {
  Uri: string;
  WebUri: string;
  UriDescription: string;
  ResponseLevel: string;
  Uris: object;
}

interface SmugMugUserProfile extends SmugMugObject {
  FirstName: string;
  LastName: string;
}
