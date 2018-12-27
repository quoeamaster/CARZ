import { WorkbenchNavigatorService } from './index';

export class WorkbenchCoreService {
  constructor(_cfg) {
    this._initByConfig(_cfg);
  }

  _initByConfig(_cfg) {
    this.services = {
      workbenchNavigatorService: new WorkbenchNavigatorService()
    };
  }

  getServiceByName(_name) {
    return this.services[_name];
  };
  updateServiceByName(_name, _srv) {
    this.services[_name] = _srv;
  }
};
