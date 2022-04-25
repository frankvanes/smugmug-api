import { SmugMug } from './SmugMug.js';
import { SmugMugBase } from './SmugMugBase.js';

export class Image extends SmugMugBase {

  constructor(obj: SmugMugResponse) {
    super(obj);
  }

  static byKey(imageKey: string): Promise<Image> {
    return SmugMug.request(`/api/v2/image/${imageKey}`);
  }
}