import { SmugMugUser, SmugMugUserProfile } from ".";

export interface SmugMugResponse {
  Uri: string;
  UriDescription: string;
  EndpontType: string;
  Locator: string;
  LocatorType: string;
  User?: SmugMugUser;
  UserProfile?: SmugMugUserProfile;
}
