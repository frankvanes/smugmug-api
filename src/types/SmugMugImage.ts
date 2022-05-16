import { SmugMugBaseType } from "./SmugMugBaseType";

export interface SmugMugImage extends SmugMugBaseType {
  Altitude: number;
  ArchivedMD5: string;
  ArchivedSize: number;
  ArchivedUri: string;
  CanBuy: boolean;
  CanEdit: boolean;
  CanShare: boolean;
  Caption: string;
  Comments: boolean;
  ComponentFileTypes: string[];
  DateTimeOriginal: string;
  DateTimeUploaded: string;
  FileName: string;
  Format: string;
  Hidden: boolean;
  ImageKey: string;
  IsArchive: boolean;
  IsVideo: boolean;
  KeywordArray: string[];
  Keywords: string;
  LastUpdated: string;
  Latitude: number;
  Longitude: number;
  OriginalHeight: number;
  OriginalSize: number;
  OriginalWidth: number;
  PreferredDisplayFileExtension: string;
  Processing: boolean;
  Protected: boolean;
  Serial: number;
  ShowKeywords: boolean;
  ThumbnailUrl: string;
  Title: string;
  Watermarked: boolean;
}
