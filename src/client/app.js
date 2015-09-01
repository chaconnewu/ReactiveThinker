import configureStore from './store/configureStore';
import React from 'react';
import { Provider } from 'react-redux';
import Page from './ProConPage/Page';
import "./app.less";

const store = configureStore();

var App = React.createClass({
  render () {
    return (
      <Page />
    );
  }
});

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('app')
);

// React.render(<App />, document.getElementById('app'));
