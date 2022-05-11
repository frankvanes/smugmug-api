import { SmugMugBase } from ".";
import { SmugMugResponse } from "../types";

export class AlbumImage extends SmugMugBase {
  constructor(obj: SmugMugResponse) {
    super(obj);
  }
}
