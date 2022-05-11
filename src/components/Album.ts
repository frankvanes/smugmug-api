import { SmugMugBase } from ".";
import { SmugMugResponse } from "../types";

export class Album extends SmugMugBase {
  constructor(obj: SmugMugResponse) {
    super(obj);
  }
}
