import { SmugMug } from "./SmugMug";
import { SmugMugBase } from "./SmugMugBase";

export class Image extends SmugMugBase {
  constructor(obj: SmugMugResponse) {
    super(obj);
  }

  static byKey(imageKey: string): Promise<Image> {
    return SmugMug.request(`/api/v2/image/${imageKey}`);
  }
}
