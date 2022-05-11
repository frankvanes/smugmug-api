import { SmugMugBase } from ".";
import { SmugMugResponse } from "../types";

export class Node extends SmugMugBase {
  constructor(obj: SmugMugResponse) {
    super(obj);
  }
}
