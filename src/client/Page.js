import React from 'react';
import Menu from './PageElements/Menu.js';
import Footer from './PageElements/Footer.js';

class Page extends React.Component {
  render () {
    return (
      <div>
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default Page;
