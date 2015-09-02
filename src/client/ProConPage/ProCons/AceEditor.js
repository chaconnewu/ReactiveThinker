import React, { Component, PropTypes } from 'react';
import { debounce, throttle } from 'lodash';
import './AceEditor.less';

var Types = {
  CLAIM : 'Claim',
  SUPPORT : 'Support'
};

class AceEditor extends Component {
  constructor(props) {
    super(props);
  }

  onChange() {
    var self = this;
    if (self.props.onChange) {
      var text = self.editor.getSession().getValue();
      self.props.onChange(text);
    }
  }

  componentDidMount() {
    var self = this;
    self.editor = ace.edit(React.findDOMNode(self));
    // Set the editor mode to text
    self.editor.getSession().setMode("ace/mode/text");
    // Wrap line
    self.editor.getSession().setUseWrapMode(true);
    // Hide the left bar (Gutter)
    self.editor.renderer.setShowGutter(false);
    // Disable line highlight
    self.editor.setHighlightActiveLine(false);
    // Show content
    self.editor.setValue(self.props.initialContent, 1);
    // Listen to 'change' event
    self.editor.on('change', self.onChange.bind(self));
  }

  render () {
    var self = this;
    var editorClassName = "RT-AceEditor-" + self.props.type;
    return (
      <div className={ editorClassName }>
      </div>
    );
  }
}

AceEditor.Types = Types;
AceEditor.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default AceEditor;
