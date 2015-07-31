import React from 'react';
import Menu from './PageElements/Menu';
import ProConContainer from './ProCons/ProConContainer';
import Footer from './PageElements/Footer';

class Page extends React.Component {
  render () {
    return (
      <div>
        <Menu />
        <ProConContainer />
        <Footer />
      </div>
    );
  }
}

export default Page;
