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
        hamburgerIconClick: this._navigatorHamburgerClick
      }
    });
    if (_updated) { console.log('updated delegate for workbenchNavigatorService'); }
  }

  /* -------------------------------- */
  /*  navigator related delegate(s)   */
  /* -------------------------------- */
  _navigatorHamburgerClick() {
    console.log('clicked the hamburger');
  }

  componentDidMount() {
    this._init();
  }

  render() {
    return (
      <div>
        <WorkbenchNavigator srv={this.props.srv} />
      </div>
    );
  }

}