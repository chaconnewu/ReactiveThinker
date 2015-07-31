import React from 'react';

class Menu extends React.Component {
  render () {
    return (
      <div className="ui inverted menu">
        <a className="active item">
          Home
        </a>
        <div className="right menu">
          <a className="ui item">
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
