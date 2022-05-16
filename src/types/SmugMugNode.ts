import { SmugMugBaseType } from "./SmugMugBaseType";

export interface SmugMugNode extends SmugMugBaseType {
  CoverImageUri?: string;
  DateAdded: string;
  DateModified: string;
  Description: string;
  EffectivePrivacy?: "Public" | "Unlisted" | "Private";
  EffectiveSecurityType: "None" | "Password" | "GrantAccess";
  FormattedValues?: string;
  HasChildren: boolean;
  HideOwner?: boolean;
  HighlightImageUri?: string;
  IsRoot: boolean;
  Keywords: string[];
  Name: string;
  NodeID: string;
  Password?: string;
  PasswordHint: string;
  Privacy?: "Public" | "Unlisted" | "Private";
  SecurityType: "None" | "Password" | "GrantAccess";
  ShowCoverImage: boolean;
  SmugMugSearchable?:
    | "No"
    | "Local"
    | "LocalUser"
    | "Yes"
    | "Inherit from User";
  SortDirection: "Ascending" | "Descending";
  SortIndex: number;
  SortMethod: "SortIndex" | "Name" | "DateAdded" | "DateModified";
  Type: "Album" | "Page" | "Folder" | "System Album" | "System Page";
  UrlName: string;
  UrlPath: string;
  WorldSearchable?: "No" | "HomeOnly" | "Yes" | "Inherit from User";
}
