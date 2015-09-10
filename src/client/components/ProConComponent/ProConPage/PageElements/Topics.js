import React from 'react';
import './Topics.less';
import $ from 'jquery';

// var TopicNames = ['Future of work', 'Community', 'Big Data', 'Shallows'];

class Topics extends React.Component {
  constructor (props) {
    super(props);
  }

  changeTopic (index) {
    this.props.changeTopic(index);
  }

  render () {
    var self = this;

    var topics = self.props.topics.topics.map(function(topic, index) {
      var menuClass = 'item';
      if (index === self.props.topics.activeIndex) {
        menuClass = 'active ' + menuClass;
      }

      return (
        <a
          className={ menuClass }
          key={index}
          onClick={ self.changeTopic.bind(self, index) }
        >
          { topic.topicName }
        </a>
      );
    });

    return (
      <div className="ui secondary pointing menu">
        <div className="header item">Topics</div>
        { topics }
      </div>
    );
  }
}

export default Topics;
