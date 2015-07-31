import React from 'react';
import Argument from './Argument';

class ProConPair extends React.Component {
  render () {

    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="one wide column"></div>
          <div className="five wide column">
            <Argument />
          </div>
          
          <div className="five wide column">
            <Argument />
          </div>
        </div>
      </div>
    );
  }
}

export default ProConPair;
