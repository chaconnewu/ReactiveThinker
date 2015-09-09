import React, { Component, PropTypes } from 'react';
import Menu from './PageElements/Menu';
import ProConContainer from './ProCons/ProConContainer';
import Footer from './PageElements/Footer';
import Topics from './PageElements/Topics';

import './Page.less';

class Page extends Component {
  render () {
    return (
      <div>
        <Menu />
        <div className="RT-Page-Topics">
          <Topics />
        </div>
        <ProConContainer
          procons={ this.props.procons }
          actions={ this.props.actions }
        />
        <Footer />
      </div>
    );
  }
}

Page.propTypes = {
  procons: PropTypes.array.isRequires,
  actions: PropTypes.object.isRequired
}

export default Page;
