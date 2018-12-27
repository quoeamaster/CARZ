import React from 'react';

import { WorkbenchNavigatorOption } from './workbenchNavigatorOptions';

import './../css/workbenchNavigator.css';

export class WorkbenchNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.srv = null;
  }

  _init() {
    if (this.props.srv) {
      this.srv = this.props.srv.getServiceByName("workbenchNavigatorService");
    }
  }

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
    switch (_delegateId) {
      case "hamburgerIconClick": {
        return this.srv.getDelegateByName("hamburgerIconClick")();
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
            iconColor="amber"
            label="login"
            iconClass="fas fa-user-circle normal-spacer-right" />
          <WorkbenchNavigatorOption
            iconColor="green"
            label="wiki"
            iconClass="fas fa-book-open normal-spacer-right" />
          <WorkbenchNavigatorOption
            iconColor="blue"
            label="about"
            iconClass="fas fa-info-circle normal-spacer-right" />
        </div>
      </div>
    );
  }
}
