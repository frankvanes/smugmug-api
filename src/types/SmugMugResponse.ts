import { SmugMugUserProfile } from "./SmugMugUserProfile";

export interface SmugMugResponse {
  Uri: string;
  UriDescription: string;
  EndpontType: string;
  Locator: string;
  LocatorType: string;
  UserProfile?: SmugMugUserProfile;
}
