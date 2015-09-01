import React from 'react';
import './AceEditor.less';

var Types = {
  CLAIM : 'Claim',
  SUPPORT : 'Support'
};

class AceEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
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
export default AceEditor;
