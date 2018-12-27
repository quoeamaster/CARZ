import React from 'react';
import ReactDom from 'react-dom';

import {
  WorkbenchNavigator
} from './component/index';

//import { BaseService } from './service/index';
import { WorkbenchCoreService } from './service/index';

import './css/core.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'mdbreact/dist/css/mdb.css';

class WorkbenchContainer extends React.Component {
  constructor(props) {
    super(props);
    this._initServices();
  }

  _initServices() {
    this.workbenchCoreSerivce = new WorkbenchCoreService();
  }

  /**
   * render method for the component
   * @returns {*}
   */
  render() {
    return (
      <div>
        <WorkbenchNavigator srv={ this.workbenchCoreSerivce }  />
      </div>
    );
  }
}

// render the component to an html element (e.g. a div or section)
ReactDom.render(<WorkbenchContainer />, document.getElementById('main-component'));

/*
const WorkbenchContainerComponent = () => {
  return <div>
    This is the <b>Workbench</b> landing page. Hola.
    <p/>
    <div className={css["display-hide"]}>hidden message</div>
    <div className={css["display-block"]}>shown message</div>
    <div className={css["display-inline"]}>shown message [block]</div>
    <div className={css["display-inline-block"]}>block again</div>
    <div className={css["display-block"]}>block again</div>
    <p/>
    <WorkbenchNavigator />
  </div>
};
*/


