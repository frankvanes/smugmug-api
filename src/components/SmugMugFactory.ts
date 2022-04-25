import { SmugMugBase } from "./SmugMugBase.js";
import { User } from "./User.js";
import { UserProfile } from "./UserProfile.js";
import { Image } from "./Image.js";
import { Node } from "./Node.js";
import { Album } from "./Album.js";
import { AlbumImage } from "./AlbumImage.js";
import { Folder } from "./Folder.js";

export class SmugMugFactory {
  public static create(obj: SmugMugResponse): SmugMugBase {
    switch (obj.Locator) {
      case "User": {
        return new User(obj);
      }
      case "UserProfile": {
        return new UserProfile(obj);
      }
      case "Image": {
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
