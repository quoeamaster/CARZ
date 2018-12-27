/**
 * BaseService class
 */
export class BaseService {
  constructor(_cfg) {
    this.delegates = {};
    this.tag = "BaseService";

    this._initByConfigObject(_cfg);
  }

  _initByConfigObject(_cfg) {
    if (_cfg) {
      // delegates object / map
      if (_cfg.hasOwnProperty("delegates")) {
        let _ds = _cfg['delegates'];
        let _keys = Object.keys(_ds);

        _keys.forEach((_key)=> {
          let _d = _ds[_key];
          if (_d) {
            this.delegates[_key] = _d;
          }
        });
      } // end -- if (delegates available)
    }
  }

  addDelegates(_cfg) {
    this._initByConfigObject(_cfg);
  }
  addDelegateByName(_name, _delegate) {
    if (_delegate && _name) {
      this.delegates[_name] = _delegate;
    }
  }

  getDelegateByName(_name) {
    return this.delegates[_name];
  }
  getDelegates() {
    return this.delegates;
  };

  getTag() {
    return this.tag;
  }
}
