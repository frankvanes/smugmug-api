import {
  SmugMugBase,
  User,
  UserProfile,
  Image,
  Node,
  Album,
  AlbumImage,
  Folder,
} from ".";
import { SmugMugResponse } from "../types";

export class SmugMugFactory {
  public static create(obj: SmugMugResponse, expansions: any): SmugMugBase {
    switch (obj.Locator) {
      case "User": {
        return new User(obj);
      }
      case "UserProfile": {
        return new UserProfile(obj);
      }
      case "Image":
      case "BioImage": {
        return new Image(obj);
      }
      case "Node": {
        return new Node(obj);
      }
      case "Album": {
        return new Album(obj);
      }
      case "AlbumImage": {
        return new AlbumImage(obj);
      }
      case "Folder": {
        return new Folder(obj);
      }
      default: {
        return new SmugMugBase(obj);
      }
    }
  }
}
