export interface SmugMugBaseType {
  Uri: string;
  WebUri: string;
  UriDescription: string;
  ResponseLevel: string;
  Uris: UrisType;
}

export interface UrisType {
  [index: string]: UriType;
}

export interface UriType {
  Uri: string;
  Locator: string;
  LocatorType: string;
  UriDescription: string;
  EndpointType: string;
}
