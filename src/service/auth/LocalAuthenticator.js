let md5 = require("md5");

const LOCAL_AUTH_CRED_KEY = "1htua.stnocca";

/**
 * localStorage version of the authenticator realm
 */
export class LocalAuthenticator {
  /**
   * default model for LocalAuthenticator
   * @returns {{testing: string}}
   */
  static defaultModel() {
    return {
      useSessionStorage: true
    };
  };
  /**
   * ctor
   * @param auth1Cfg
   */
  constructor(auth1Cfg) {
    // choose storage
    if ((!auth1Cfg.useSessionStorage || auth1Cfg.useSessionStorage === true) && window.sessionStorage) {
      this.storageApproach = "session";
      this.storage = window.sessionStorage;
    } else if (window.localStorage) {
      this.storageApproach = "local";
      this.storage = window.localStorage;
    } else {
      throw {
        code: 500,
        reason: "both localStorage and sessionStorage is not supported by the running Browser, please try Chrome or Firefox."
      };
    }
    // preload default accounts back into the storage
    this._loadCredentialsToStorage();
  }
  /**
   * preload default accounts back into the chosen storage
   * @private
   */
  _loadCredentialsToStorage() {
    let auth2 = require("./../../config/auth2.json");
    let keys = Object.keys(auth2);
    let finalAuth2 = {};
    // uglify the password / passphrase part
    keys.forEach((key) => {
      finalAuth2[key] = this._uglify(auth2[key]);
    });
    this.storage.setItem(LOCAL_AUTH_CRED_KEY, JSON.stringify(finalAuth2));
  }
  /**
   * method to uglify the given token
   * @param token
   * @returns {*}
   * @private
   */
  _uglify(token) {
    if (!token) { return ''; }
    return md5(token);
  }

  _isUserPassphraseValid(user, passphrase) {
    let model = {
      success: true
    };
    if (!user || user.length <= 0) {
      model.success = false;
      model.explain = "user value provided is not valid";
    } else if (!passphrase || passphrase.length <= 0) {
      model.success = false;
      model.explain = "passphase value provided is not valid";
    }
    return model;
  }

  /* ---------------------------------------------------------------- */
  /*  sort of interface methods for all Authenticator implementation  */
  /* ---------------------------------------------------------------- */

  authCredentials(user, passphrase, model) {
    let _model = this._isUserPassphraseValid(user, passphrase);
    if (_model.success) {
      _model.success = false;
      // 1. is the user available yet?
      let auths = JSON.parse(this.storage.getItem(LOCAL_AUTH_CRED_KEY));
      if (auths.hasOwnProperty(user)) {
        // 2. uglify the passphrase and compare
        let _uglyPwd = this._uglify(passphrase);
        if (_uglyPwd === auths[user]) {
          _model.success = true;
        } else {
          _model.explain = "passphrase provided does NOT match! Authentication failed!";
        }
      } else {
        _model.explain = "user value provided is NOT an acceptable account yet!";
      }
    }
    return _model;
  }
  addCredential(user, passphrase, model) {}
  removeCredential(user, model) {}
  updateCredential(user, passphrase, model) {}
}

/**
 *  config model entries:
 *
 *  useSessionStorage: should store the auth data as sessionStorage or localStorage
 *    valid values => true (sessionStorage), false (localStorage)
 */