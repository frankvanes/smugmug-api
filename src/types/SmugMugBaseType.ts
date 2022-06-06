export interface SmugMugBaseType {
  Uri: string;
  WebUri: string;
  UriDescription: string;
  ResponseLevel: string;
  Uris: UrisType;
}

export interface IndexedType {
  [index: string]: UriType;
}

export type UrisType = IndexedType;

export type UriType = UrisType & {
  Uri: string;
  Locator: string;
  LocatorType: string;
  UriDescription: string;
  EndpointType: string;
};
