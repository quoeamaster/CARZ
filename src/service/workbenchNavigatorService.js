import { BaseService } from './index';

export class WorkbenchNavigatorService extends BaseService {
  constructor(_cfg) {
    super(_cfg);
    this._initByConfigObject(_cfg);
  }
  _initByConfigObject(_cfg) {
    this.tag = "WorkbenchNavigatorService";
  }
}