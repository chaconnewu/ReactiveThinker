import React from 'react';
import './Topics.less';
import $ from 'jquery';

var TopicNames = ['Future of work', 'Community', 'Big Data', 'Shallows'];

class Topics extends React.Component {
  constructor (props) {
    super(props);
    var self = this;
    self.state = {
      activeIndex : 0
    };
  }

  changeTopic (index) {
    var self = this;
    self.setState({
      activeIndex : index
    });
  }

  render () {
    var self = this;
    var topics = TopicNames.map(function(topic, index) {
      var menuClass = 'item';
      if (index === self.state.activeIndex) {
        menuClass = 'active ' + menuClass;
      }

      return (
        <a
          className={ menuClass }
          key={index}
          onClick={ self.changeTopic.bind(self, index) }
        >
          { topic }
        </a>
      );
    });

    return (
      <div className="ui text menu">
        <div className="header item">Topics</div>
        { topics }
      </div>
    );
  }
}

export default Topics;
