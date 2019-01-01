import React from 'react'
import { WorkbenchNavigator } from './workbenchNavigator';

/**
 * Page for Workbench
 */
export class WorkbenchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  _init() {
    this._initNavigatorDelegates();
  }
  _initNavigatorDelegates() {
    let _srv = this.props.srv.getServiceByName("workbenchNavigatorService");
    if (!_srv) {
      return false;
    }
    let _updated = _srv.addDelegates({
      delegates: {
        hamburgerIconClick: this._navigatorHamburgerClick,
        navLoginLogoutClick: this._navigatorLoginClick,
        navWikiClick: this._navigatorWikiClick,
        navAboutClick: this._navigatorAboutClick
      }
    });
    if (_updated) {
      console.log('updated delegate for workbenchNavigatorService');
      this.props.srv.updateServiceByName("workbenchNavigatorService", _srv);
    }
  }

  /* -------------------------------- */
  /*  navigator related delegate(s)   */
  /*  - every app should declare      */
  /*    its own delegate              */
  /*    implementations               */
  /* -------------------------------- */
  _navigatorHamburgerClick() {
    console.log('clicked the hamburger ver2');
  }
  _navigatorLoginClick() {
    console.log('nav login/logout click');
  }
  _navigatorWikiClick() {
    console.log('nav wiki clicked');
  }
  _navigatorAboutClick() {
    console.log('nav about clicked');
  }

  componentDidMount() {
    this._init();
  }

  render() {
    return (
      <div>
        <WorkbenchNavigator
          srv={this.props.srv} />
      </div>
    );
  }

}