import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import ProConApp from './ProConComponent/ProConApp';
import { ProConContainer } from './ProConComponent/ProConPage/ProCons/ProConContainer';

const store = configureStore();

class ProConProvider extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <ProConApp />}
      </Provider>
    );
  }
}

React.render(
  <ProConProvider />,
  document.getElementById('app')
);

export default ProConProvider;
