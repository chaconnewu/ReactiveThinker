import React from 'react';
import AceEditor from './AceEditor';
import './Argument.less';

class Argument extends React.Component {
  constructor (props) {
    super(props);
    var self = this;
    self.state = {
      show : true
    };
  }

  toggleSupportList () {
    var self = this;
    self.setState({
      show : !self.state.show
    });
  }

  render () {
    var self = this;
    var iconClass, supportListClass;

    if (self.state.show) {
      iconClass = 'large angle up icon';
      supportListClass = 'RT-Argument-SupportList';
    } else {
      iconClass = 'large angle down icon';
      supportListClass = 'RT-Argument-SupportList-hidden';
    }

    return (
      <div>
        <AceEditor
          type={AceEditor.Types.CLAIM}
        />
        <i
          className={ iconClass }
          onClick={ self.toggleSupportList.bind(self) }
        />
        <div className={ supportListClass }>
          <AceEditor
            type={AceEditor.Types.SUPPORT}
          />
        </div>
      </div>
    );
  }
}

export default Argument;
