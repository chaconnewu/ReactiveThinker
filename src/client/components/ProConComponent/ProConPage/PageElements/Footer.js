import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <div className='ui grid'>
        <div className="five wide column" />
        <div className="seven wide column">
          Copyright ©2015, CSCL Lab @ The Pennsylvania State University. Developed by Yu Wu
        </div>
      </div>
    );
  }
}

export default Footer;
