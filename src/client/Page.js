import React from 'react';
import Menu from './PageElements/Menu';
import ProConContainer from './ProCons/ProConContainer';
import Footer from './PageElements/Footer';
import Topics from './PageElements/Topics';

import './Page.less';

class Page extends React.Component {
  render () {
    return (
      <div>
        <Menu />
        <div className="RT-Page-Topics">
          <Topics />
        </div>
        <ProConContainer />
        <Footer />
      </div>
    );
  }
}

export default Page;
