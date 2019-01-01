import React from 'react';
import ReactDom from 'react-dom';

import {
  WorkbenchPage
} from './component/index';

//import { BaseService } from './service/index';
import { WorkbenchCoreService } from './service/index';

import './css/core.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'mdbreact/dist/css/mdb.css';

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this._initModels();
    this._initServices();
  }

  /**
   * data model(s) for the application
   * @private
   */
  _initModels() {}
  /**
   * service(s) for the application
   * @private
   */
  _initServices() {
    this.workbenchCoreSerivce = new WorkbenchCoreService();
  }

  /**
   * render method for the component
   * @returns {*}
   */
  render() {
    /*
     * TODO: lack of auth2 and session utilities
     * should be able to swap the "page" based on conditions; for example, there are
     * public and member page(s); hence certain links might be linking to the login "Page" before
     * forwarding to the designated Page.
     */
    return (
      <div>
        <WorkbenchPage
          srv={ this.workbenchCoreSerivce }  />
      </div>
    );
  }
}

// render the component to an html element (e.g. a div or section)
ReactDom.render(<PageContainer />, document.getElementById('main-component'));

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


