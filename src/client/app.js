import React from 'react';
import Page from './Page';
import Rx from 'rx';
import "./app.less";

var App = React.createClass({
  render () {
    return (
      <Page />
    );
  }
});

React.render(<App />, document.getElementById('app'));
