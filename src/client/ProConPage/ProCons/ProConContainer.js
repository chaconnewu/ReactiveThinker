import React, { Component, PropTypes } from 'react';
import ProConPair from './ProConPair';
import './ProConContainer.less';

class ProConContainer extends Component {
  constructor (props) {
    super(props);
  }

  addProConPair () {
    this.props.actions.addProCon();
  }

  render () {
    var self = this;
    var proConPairs = self.props.procons.map(function(procon, index) {
      return (
        <ProConPair
          addSupport={ self.props.actions.addSupport }
          key={ index }
          proconIdx={ index }
          procon={ procon }
        />
      );
    });

    return (
      <div>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='one wide column'></div>
            <div className='five wide column'>
              <h2 className='ui header'>Pro</h2>
            </div>
            <div className='five wide column'>
              <h2 className='ui header'>Con</h2>
            </div>
          </div>
          <div className='ui row'>
            <div className='one wide column'></div>
            <div
              className='RT-ProConContainer-addProConButton three wide column'
              onClick={ self.addProConPair.bind(self) }
            >
              <i className='large plus icon' />
              <span>Add a Pro & Con pair ...</span>
            </div>
          </div>
        </div>
        { proConPairs }
      </div>
    );
  }
}

ProConContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  procons: PropTypes.array.isRequired
}
export default ProConContainer;
