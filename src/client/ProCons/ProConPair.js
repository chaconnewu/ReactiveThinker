import React from 'react';
import Argument from './Argument';

class ProConPair extends React.Component {
  render () {
    var self = this;

    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="one wide column"></div>
          <div className="five wide column">
            <Argument argument={ self.props.procon.pro } />
          </div>

          <div className="five wide column">
            <Argument argument={ self.props.procon.con }/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProConPair;
