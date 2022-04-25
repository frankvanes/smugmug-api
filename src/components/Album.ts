import { SmugMugBase } from './SmugMugBase.js';

export class Album extends SmugMugBase {

  constructor(obj: SmugMugResponse) {
    super(obj);
  }
}