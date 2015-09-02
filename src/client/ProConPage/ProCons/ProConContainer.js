import React, { Component, PropTypes } from 'react';
import ProConPair from './ProConPair';
import './ProConContainer.less';

class ProConContainer extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = false;

    if (this.props.procons.length === nextProps.procons.length) {
      for (let i = 0; i < this.props.procons.length; i++) {
        if (this.props.procons[i].pro.supports.length !== nextProps.procons[i].pro.supports.length) {
          shouldUpdate = true;
          break;
        }
        if (this.props.procons[i].con.supports.length !== nextProps.procons[i].con.supports.length) {
          shouldUpdate = true;
          break;
        }
      }
    } else {
      shouldUpdate = true;
    }

    return shouldUpdate;
  }

  addProConPair () {
    this.props.actions.addProCon();
  }

  render () {
    var self = this;
    var proConPairs = self.props.procons.map(function(procon, index) {
      return (
        <ProConPair
          actions={ self.props.actions }
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
