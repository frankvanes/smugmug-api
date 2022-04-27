import { SmugMugBase } from "./SmugMugBase";

export class Album extends SmugMugBase {
  constructor(obj: SmugMugResponse) {
    super(obj);
  }
}
