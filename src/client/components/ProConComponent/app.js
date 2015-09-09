import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import * as ProConActions from '../../actions/procon';
import Page from './ProConPage/Page';
import "./app.less";

class App extends Component {
  render () {
    const { procons, dispatch } = this.props;
    const actions = bindActionCreators(ProConActions, dispatch);
    return (
      <Page
        actions={ actions }
        procons={ procons }
      />
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  procons: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    procons: state.procons
  };
}

export default connect(mapStateToProps)(App);
