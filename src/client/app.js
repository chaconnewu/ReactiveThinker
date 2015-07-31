import "./app.less";
import Page from './Page';
import React from 'react';


var App = React.createClass({
  render () {
    return (
      <Page />
    );
  }
});

React.render(<App />, document.getElementById('app'));
