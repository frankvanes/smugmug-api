import { SmugMugBase } from ".";
import { SmugMugResponse } from "../types";

export class Folder extends SmugMugBase {
  constructor(obj: SmugMugResponse) {
    super(obj);
  }
}
