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
    self.editor.getSession().setMode("ace/mode/text");
    self.editor.getSession().setUseWrapMode(true);
    self.editor.renderer.setShowGutter(false);
    self.editor.setHighlightActiveLine(false);
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
