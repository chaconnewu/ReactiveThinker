import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import * as ProConActions from '../../actions/procon';

import Menu from './ProConPage/PageElements/Menu';
import ProConContainer from './ProConPage/ProCons/ProConContainer';
import Footer from './ProConPage/PageElements/Footer';
import Topics from './ProConPage/PageElements/Topics';

import "./ProConApp.less";

class ProConApp extends Component {
  render () {
    const { procons, topics, dispatch } = this.props;
    const actions = bindActionCreators(ProConActions, dispatch);
    return (
      <div>
        <Menu />
        <div className="RT-Page-Topics">
          <Topics topics={ topics } changeTopic={ actions.changeTopic }/>
        </div>
        <ProConContainer
          procons={ procons }
          actions={ actions }
        />
        <Footer />
      </div>
    );
  }
}

ProConApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  procons: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequied
};

function mapStateToProps(state) {
  return {
    procons: state.procons,
    topics: state.topics
  };
}

export default connect(mapStateToProps)(ProConApp);
