import React from 'react';

import { WorkbenchNavigatorOption } from './workbenchNavigatorOptions';

import './../css/workbenchNavigator.css';

export class WorkbenchNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      srv: this.props.srv.getServiceByName("workbenchNavigatorService"),

      /* login button model */
      loginButtonModel: {
        label: "login",
        toLogin: true
      }
    };
  }
  _init() {}

  /* -------------------- */
  /*    lifecycle hooks   */
  /* -------------------- */

  componentDidMount() {
    // after mount hook
    this._init();
  }

  /**
   * generic onClick handler; call the service.delegate eventually
   * @param _delegateId
   * @returns {*}
   * @private
   */
  _onClick(_delegateId) {
    if (!this.state.srv) { return false; }
    switch (_delegateId) {
      case "navAboutClick":
      case "navWikiClick":
      case "hamburgerIconClick": {
        return this.state.srv.getDelegateByName(_delegateId)();
      }
      case "navLoginLogoutClick": {
        // TODO: handle login/logout situation
        if (this.state.loginButtonModel.toLogin === true) {
          this.setState({
            loginButtonModel: {
              toLogin: false,
              label: "logout"
            }
          });
        } else {
          this.setState({
            loginButtonModel: {
              toLogin: true,
              label: "login"
            }
          });
        }
        return this.state.srv.getDelegateByName(_delegateId)();
      }
    }
  }

  /**
   * render method for the component
   * @returns {*}
   */
  render() {
    return (
      <div className="workbench-navigator">
        <i className="workbench-hamburger-icon fas fa-dice-d20" />
        <div className="workbench-hamburger-icon-container cursor-pointer display-inline-block"
             onClick={ () => { this._onClick('hamburgerIconClick'); } } />
        <div className="workbench-title display-inline-block">carz <span className="workbench-subtitle">platform</span></div>

        <div className="workbench-option-container display-inline-block">
          <WorkbenchNavigatorOption
            iconColor="green"
            label="wiki"
            clickDelegate={ () => { this._onClick("navWikiClick"); } }
            iconClass="fas fa-book-open normal-spacer-right" />
          <WorkbenchNavigatorOption
            iconColor="blue"
            label="about"
            clickDelegate={ () => { this._onClick("navAboutClick"); } }
            iconClass="fas fa-info-circle normal-spacer-right" />
          <WorkbenchNavigatorOption
            iconColor="amber"
            label={this.state.loginButtonModel.label}
            clickDelegate={ () => { this._onClick("navLoginLogoutClick"); } }
            iconClass="fas fa-user-circle normal-spacer-right" />
        </div>
      </div>
    );
  }
}
