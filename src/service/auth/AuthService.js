import { LocalAuthenticator } from "./LocalAuthenticator";

export class AuthTwoService {
  /**
   * constructor
   * @param cfg -> optional config for authentication realm info etc;
   *  also authorization rules could be passed along this config object as well
   */
  constructor(cfg) {
    if (cfg) {
      this.originalCfg = cfg;
    } else {
      this.originalCfg = {
        auth1: {
          realm: "local",
          model: LocalAuthenticator.defaultModel()
        },
        auth2: {
          realm: "role",
          rules: {}
        }
      };
    }
    this._initAuthenticator();
    this._initAuthorizor();
  }

  _initAuthenticator() {
    this.authenticator = {};
    switch (this.originalCfg.auth1.realm) {
      case "local": {
        this.authenticator = new LocalAuthenticator(this.originalCfg.auth1);
      }
    } // end switch
  }
  _initAuthorizor() {
    this.authorizor = {};
  }


}

/**
 * config object specification (version 1.0.0)
 *
 * auth1.realm: realm to retrieve and update the authentication information
 *  - valid values: local, elasticsearch, firebase
 *  - impl: affects the Authenticator object to be chosen e.g. realm = local, impl = LocalAuthenticator
 *
 * auth1.model: an optional object containing realm specific config; the corresponding impl should be
 *  knowledgeable to dissect this model object
 *
 * auth2.realm: plan / realm for handling authorization tasks
 *  - valid values: role
 *  - impl: determine which authorizor impl to pick (e.g. RoleAuthorizor)
 *
 * auth2.rules: model describing the rules for the authorizor to work with
 *    (e.g. READ = can search / read data only)
 */