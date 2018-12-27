import { BaseService } from './index';

export class WorkbenchNavigatorService extends BaseService {
  constructor(_cfg) {
    super(_cfg);
    this._initByConfigObject(_cfg);
  }
  _initByConfigObject(_cfg) {
    // sort of identifier plus "namespace" if necessary
    this.tag = "WorkbenchNavigatorService";
    return super._initByConfigObject(_cfg);
  }
}