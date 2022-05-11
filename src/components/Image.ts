import { SmugMug, SmugMugBase } from ".";
import { SmugMugResponse } from "../types";

export class Image extends SmugMugBase {
  constructor(obj: SmugMugResponse) {
    super(obj);
  }

  static byKey(imageKey: string): Promise<Image> {
    return SmugMug.request(`/api/v2/image/${imageKey}`);
  }
}
