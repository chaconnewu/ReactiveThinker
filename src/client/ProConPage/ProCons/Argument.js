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

  addSupport () {
    var self = this;


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

    var supports = self.props.argument.supports.map(function(support, index) {
      return (
        <AceEditor
          key={ index }
          initialContent={ support }
          type={AceEditor.Types.SUPPORT}
        />
      );
    });

    return (
      <div>
        <AceEditor
          initialContent={ self.props.argument.claim }
          type={ AceEditor.Types.CLAIM }
        />
        <div className="RT-Argument-menu">
          <i
            className={ iconClass }
            onClick={ self.toggleSupportList.bind(self) }
          />
          <i
            className="large plus square outline icon"
            onClick={ self.addSupport.bind(self) }
          />
        </div>
        <div className={ supportListClass }>
          { supports }
        </div>
      </div>
    );
  }
}

export default Argument;
