import { SmugMugBaseType } from "./SmugMugBaseType";

export interface SmugMugUser extends SmugMugBaseType {
  Name: string;
  NickName: string;
  QuickShare: boolean;
  RefTag: string;
  ViewPassHint: string;
}
