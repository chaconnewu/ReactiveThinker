import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import App from './ProConComponent/app';

const store = configureStore();

class ProConProvider extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

React.render(
  <ProConProvider />,
  document.getElementById('app')
);

export default ProConProvider;
