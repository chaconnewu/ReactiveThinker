import React, { Component, PropTypes } from 'react';
import AceEditor from './AceEditor';
import './Argument.less';


class Argument extends Component {
  constructor (props) {
    super(props);
    var self = this;
    self.state = {
      show : true
    };
  }

  addSupport () {
    var proconIdx = this.props.proconIdx;
    var side = this.props.side;
    this.props.actions.addSupport(proconIdx, side);
  }

  toggleSupportList () {
    var self = this;
    self.setState({
      show : !self.state.show
    });
  }

  render () {
    var self = this;
    var proconIdx = this.props.proconIdx;
    var side = this.props.side;
    var iconClass, supportListClass;

    if (self.state.show) {
      iconClass = 'large angle up icon';
      supportListClass = 'RT-Argument-SupportList';
    } else {
      iconClass = 'large angle down icon';
      supportListClass = 'RT-Argument-SupportList-hidden';
    }

    var supports = self.props.argument.supports.map(function(support, index) {
      var updateSupport = function(text) {
        return self.props.actions.updateSupport.apply(this, [proconIdx, side, index, text]);
      };
      return (
        <AceEditor
          key={ proconIdx.toString() + index.toString() + support }
          supportIdx={ index }
          onChange={ updateSupport }
          initialContent={ support }
          type={ AceEditor.Types.SUPPORT }
        />
      );
    });

    var updateClaim = function(text) {
      return self.props.actions.updateSupport.apply(self, [proconIdx, side, null, text]);
    };

    return (
      <div>
        <AceEditor
          key={ proconIdx.toString() + side + self.props.argument.claim }
          initialContent={ self.props.argument.claim }
          onChange={ updateClaim }
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

Argument.propTypes = {
  actions: PropTypes.object.isRequired,
  argument: PropTypes.object.isRequired,
  proconIdx: PropTypes.number.isRequired,
  side: PropTypes.string.isRequired
}
export default Argument;
