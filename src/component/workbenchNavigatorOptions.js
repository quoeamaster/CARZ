import React from 'react';

import './../css/workbenchNavigator.css';

export class WorkbenchNavigatorOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconClass: this.props.iconClass,

      pressed: false,

      clickDelegate: this.props.clickDelegate
      // clickDelegateId: this.props.clickDelegateId,
      // clickDelegates: this.props.clickDelegates,
      /* data model for this button component */
      // model: this.props.model
    };
  }

  componentDidMount() {
    this._init();
  }

  _init() {
    if (this.props.iconClass && this.props.iconColor) {
      // update the iconClass
      let _css = WorkbenchNavigatorOption._getIconColorClass(this.props.iconColor);
      this.setState({
        iconColorClass: _css
      });
      this.setState({
        iconClass: this.props.iconClass + ' ' + _css
      });
    }
  }

  static _getIconColorClass(_colorHint) {
    if (_colorHint) {
      switch (_colorHint) {
        case "amber": {
          return "workbench-option-amber";
        }
        case "green": {
          return "workbench-option-green";
        }
        case "red": {
          return "workbench-option-red";
        }
        case "blue": {
          return "workbench-option-blue";
        }
        case "grey": {
          return "workbench-option-grey";
        }
        default: {
          return "workbench-option-grey";
        }
      }
    }
  }

  render() {
    return (
      <div
        onClick={ this.state.clickDelegate }
        className="workbench-option display-inline-block cursor-pointer">
        <i className={this.state.iconClass} />
        <span>{this.props.label}</span>
      </div>
    );
  }

}