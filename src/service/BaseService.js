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
    let _sum = 0;
    if (_cfg) {
      // delegates object / map
      if (_cfg.hasOwnProperty("delegates")) {
        let _ds = _cfg['delegates'];
        let _keys = Object.keys(_ds);

        _keys.forEach((_key)=> {
          let _d = _ds[_key];
          if (_d) {
            this.delegates[_key] = _d;
            // indicator to know if any updates have been applied
            _sum++;
          }
        });
      } // end -- if (delegates available)
    }
    return _sum > 0;
  }

  /**
   * @param _cfg
   * @returns {Promise<any>} => true = has updated; false = nothing updated
   */
  addDelegates(_cfg) {
    return this._initByConfigObject(_cfg);
    /*
    console.log(this._initByConfigObject);
    return new Promise((resolve, reject) => {
      resolve(this._initByConfigObject(_cfg));
    });
    */
  }
  addDelegateByName(_name, _delegate) {
    if (_delegate && _name) {
      this.delegates[_name] = _delegate;
      return true;
    }
    return false;
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
