import React from 'react';
import ProConPair from './ProConPair';

class ProConContainer extends React.Component {
  render () {
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
        </div>

        <ProConPair />
        <ProConPair />
      </div>
    );
  }
}

export default ProConContainer;
