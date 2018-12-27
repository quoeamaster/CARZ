import React from 'react';

import { WorkbenchNavigatorOption } from './workbenchNavigatorOptions';

import './../css/workbenchNavigator.css';

export class WorkbenchNavigator extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.srv);
    // setup state if necessary
  }

  /* -------------------- */
  /*    lifecycle hooks   */
  /* -------------------- */

  componentDidMount() {
    // after mount hook
  }
  /**
   * render method for the component
   * @returns {*}
   */
  render() {
    return (
      <div className="workbench-navigator">
        <i id="_wbench_icon" className="workbench-hamburger-icon fas fa-dice-d20" />
        <div id="_wbench_icon_container" className="workbench-hamburger-icon-container cursor-pointer display-inline-block" />
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
        </div>
      </div>
    );
  }
}
