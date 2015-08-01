import React from 'react';
import ProConPair from './ProConPair';

var proconData = [
  {
    pro : {
      claim : 'This is pro claim 1',
      supports : [
        'This is support 1 for pro claim 1',
        'This is support 2 for pro claim 1',
        'This is support 3 for pro claim 1'
      ]
    },
    con : {
      claim : 'This is con claim 1',
      supports : [
        'This is support 1 for con claim 1',
        'This is support 2 for con claim 1'
      ]
    }
  },
  {
    pro : {
      claim : 'This is pro claim 2',
      supports : [
        'This is support 1 for pro claim 2',
      ]
    },
    con : {
      claim : 'This is con claim 2',
      supports : [
        'This is support 1 for con claim 2',
        'This is support 2 for con claim 2'
      ]
    }
  }
];

class ProConContainer extends React.Component {

  render () {
    var self = this;
    var proConPairs = proconData.map(function(procon, index) {
      return <ProConPair key={ index } procon={ procon } />;
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
        </div>

        { proConPairs }
      </div>
    );
  }
}

export default ProConContainer;
