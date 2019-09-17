import React from 'react';
// import {UnControlled as CodeMirror} from 'react-codemirror2'
import CodeMirror from 'react-codemirror';

import 'codemirror/mode/javascript/javascript.js';

const mirror = (props) => {

  return (
    <div id='mirror'>
      <CodeMirror
        value='describe("addUser"){ it("should return an object")}'
        options={{
          mode: {name:'javascript'},
          theme: 'ambiance',
          tabsize: 2,
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
        }}
      />
    </div>
  )
}

export default mirror;
